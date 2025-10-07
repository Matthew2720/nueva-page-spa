# Script de Optimización de Imágenes Meridian
# Este script automatiza el proceso de optimización de imágenes del proyecto

param(
    [string]$SourceFolder = "src\assets\images\original",
    [string]$OutputFolder = "src\assets\images",
    [int]$MaxWidth = 1920,
    [int]$Quality = 85,
    [switch]$GenerateWebP,
    [switch]$GenerateThumbnails
)

Write-Host "🎨 Iniciando optimización de imágenes Meridian..." -ForegroundColor Cyan

# Verificar si ImageMagick está instalado
try {
    $null = magick -version
    Write-Host "✅ ImageMagick detectado" -ForegroundColor Green
} catch {
    Write-Host "❌ ImageMagick no está instalado. Por favor instálelo desde: https://imagemagick.org/script/download.php#windows" -ForegroundColor Red
    exit 1
}

# Crear directorios de salida
$directories = @(
    "$OutputFolder\hero",
    "$OutputFolder\gallery", 
    "$OutputFolder\projects",
    "$OutputFolder\testimonials",
    "$OutputFolder\media\thumbnails",
    "$OutputFolder\media\webp"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "📁 Creado directorio: $dir" -ForegroundColor Yellow
    }
}

# Función para optimizar una imagen
function Optimize-Image {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$MaxWidth,
        [int]$Quality
    )
    
    $inputFile = Get-Item $InputPath
    $outputDir = Split-Path $OutputPath -Parent
    
    if (!(Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    # Optimizar imagen JPEG
    magick "$InputPath" -resize "${MaxWidth}x${MaxWidth}>" -quality $Quality -strip "$OutputPath"
    
    if (Test-Path $OutputPath) {
        $inputSize = [math]::Round($inputFile.Length / 1MB, 2)
        $outputFile = Get-Item $OutputPath
        $outputSize = [math]::Round($outputFile.Length / 1MB, 2)
        $reduction = [math]::Round((($inputFile.Length - $outputFile.Length) / $inputFile.Length) * 100, 1)
        
        Write-Host "  ✅ $($inputFile.Name): ${inputSize}MB → ${outputSize}MB (-${reduction}%)" -ForegroundColor Green
        return $true
    }
    return $false
}

# Función para generar WebP
function Generate-WebP {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Quality = 80
    )
    
    $outputDir = Split-Path $OutputPath -Parent
    if (!(Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    magick "$InputPath" -quality $Quality "$OutputPath"
}

# Función para generar thumbnail
function Generate-Thumbnail {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Size = 400
    )
    
    $outputDir = Split-Path $OutputPath -Parent
    if (!(Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    magick "$InputPath" -resize "${Size}x${Size}^" -gravity center -crop "${Size}x${Size}+0+0" "$OutputPath"
}

# Mapeo de imágenes por proyecto
$projectMapping = @{
    "LA ESTRELLA" = @{
        "DESPUES" = "projects\la-estrella\after"
        "ANTES" = "projects\la-estrella\before"
    }
    "CABAÑAS" = "projects\cabanas"
    "RENDERS" = "media\renders"
}

# Imágenes destacadas para hero sections
$heroImages = @(
    "FOTOS PROYECTO 1 LA ESTRELLA\DESPUES\_MG_7601-1.jpg",
    "FOTOS PROYECTO 1 LA ESTRELLA\DESPUES\_MG_7620-1.jpg",
    "MÁS RENDERS\COCINA 1.1.png"
)

$totalProcessed = 0
$totalErrors = 0

# Procesar cada proyecto
Write-Host "`n📂 Procesando proyectos..." -ForegroundColor Cyan

if (Test-Path $SourceFolder) {
    Get-ChildItem $SourceFolder -Recurse -Include "*.jpg", "*.jpeg", "*.png", "*.JPG", "*.JPEG", "*.PNG" | ForEach-Object {
        $relativePath = $_.FullName.Substring((Resolve-Path $SourceFolder).Path.Length + 1)
        $fileName = $_.Name
        $extension = $_.Extension.ToLower()
        
        Write-Host "`n🖼️  Procesando: $fileName" -ForegroundColor Yellow
        
        # Determinar directorio de salida basado en la ruta
        $outputSubDir = "gallery"
        if ($relativePath -like "*ANTES*") { $outputSubDir = "projects\la-estrella\before" }
        elseif ($relativePath -like "*DESPUES*") { $outputSubDir = "projects\la-estrella\after" }
        elseif ($relativePath -like "*CABAÑAS*") { $outputSubDir = "projects\cabanas" }
        elseif ($relativePath -like "*RENDERS*") { $outputSubDir = "media\renders" }
        
        # Verificar si es imagen hero
        $isHero = $heroImages -contains $relativePath
        if ($isHero) {
            $heroOutputPath = "$OutputFolder\hero\$fileName"
            if (Optimize-Image -InputPath $_.FullName -OutputPath $heroOutputPath -MaxWidth 1920 -Quality 90) {
                $totalProcessed++
                
                # Generar WebP para hero
                if ($GenerateWebP) {
                    $webpPath = $heroOutputPath -replace '\.(jpg|jpeg|png)$', '.webp'
                    Generate-WebP -InputPath $heroOutputPath -OutputPath $webpPath -Quality 85
                }
            }
        }
        
        # Optimizar para galería/sección correspondiente
        $mainOutputPath = "$OutputFolder\$outputSubDir\$fileName"
        $maxWidthForSection = if ($isHero) { 1920 } elseif ($outputSubDir -like "*renders*") { 1200 } else { 800 }
        $qualityForSection = if ($isHero) { 90 } elseif ($outputSubDir -like "*renders*") { 88 } else { 85 }
        
        if (Optimize-Image -InputPath $_.FullName -OutputPath $mainOutputPath -MaxWidth $maxWidthForSection -Quality $qualityForSection) {
            $totalProcessed++
            
            # Generar WebP
            if ($GenerateWebP) {
                $webpPath = "$OutputFolder\media\webp\$($fileName -replace '\.(jpg|jpeg|png)$', '.webp')"
                Generate-WebP -InputPath $mainOutputPath -OutputPath $webpPath -Quality 80
            }
            
            # Generar thumbnail
            if ($GenerateThumbnails) {
                $thumbPath = "$OutputFolder\media\thumbnails\thumb_$fileName"
                Generate-Thumbnail -InputPath $mainOutputPath -OutputPath $thumbPath -Size 400
            }
        } else {
            $totalErrors++
            Write-Host "  ❌ Error procesando $fileName" -ForegroundColor Red
        }
    }
} else {
    Write-Host "❌ No se encontró la carpeta de origen: $SourceFolder" -ForegroundColor Red
    exit 1
}

# Generar reporte
Write-Host "`n📊 REPORTE DE OPTIMIZACIÓN" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ Imágenes procesadas: $totalProcessed" -ForegroundColor Green
Write-Host "❌ Errores: $totalErrors" -ForegroundColor Red
Write-Host "📁 Directorio de salida: $OutputFolder" -ForegroundColor Yellow

if ($GenerateWebP) {
    $webpCount = (Get-ChildItem "$OutputFolder\media\webp" -Filter "*.webp" -ErrorAction SilentlyContinue | Measure-Object).Count
    Write-Host "🌐 Archivos WebP generados: $webpCount" -ForegroundColor Green
}

if ($GenerateThumbnails) {
    $thumbCount = (Get-ChildItem "$OutputFolder\media\thumbnails" -Filter "thumb_*" -ErrorAction SilentlyContinue | Measure-Object).Count
    Write-Host "🖼️  Thumbnails generados: $thumbCount" -ForegroundColor Green
}

# Calcular espacio ahorrado total
$originalSize = 0
$optimizedSize = 0

Get-ChildItem $SourceFolder -Recurse -Include "*.jpg", "*.jpeg", "*.png" -ErrorAction SilentlyContinue | ForEach-Object {
    $originalSize += $_.Length
}

Get-ChildItem $OutputFolder -Recurse -Include "*.jpg", "*.jpeg", "*.png" -ErrorAction SilentlyContinue | ForEach-Object {
    $optimizedSize += $_.Length
}

if ($originalSize -gt 0) {
    $totalReduction = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 1)
    $originalSizeMB = [math]::Round($originalSize / 1MB, 2)
    $optimizedSizeMB = [math]::Round($optimizedSize / 1MB, 2)
    
    Write-Host "💾 Reducción total: ${originalSizeMB}MB → ${optimizedSizeMB}MB (-${totalReduction}%)" -ForegroundColor Cyan
}

Write-Host "`n🎉 Optimización completada!" -ForegroundColor Green
Write-Host "💡 Para usar las imágenes optimizadas, actualiza las rutas en los componentes Angular." -ForegroundColor Yellow

# Generar archivo de mapeo JSON para Angular
$mappingData = @{
    "optimizationDate" = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    "totalProcessed" = $totalProcessed
    "totalErrors" = $totalErrors
    "heroImages" = @()
    "galleryImages" = @()
    "projectImages" = @()
}

# Actualizar componente Angular con rutas optimizadas
Write-Host "`n🔄 Para integrar las imágenes optimizadas:" -ForegroundColor Cyan
Write-Host "1. Las imágenes están en: $OutputFolder" -ForegroundColor White
Write-Host "2. Actualiza image-mapping.service.ts con las nuevas rutas" -ForegroundColor White
Write-Host "3. Ejecuta: ng build para verificar que todo funciona" -ForegroundColor White
Write-Host "4. Visita: http://localhost:4200/image-optimizer para ver el progreso" -ForegroundColor White