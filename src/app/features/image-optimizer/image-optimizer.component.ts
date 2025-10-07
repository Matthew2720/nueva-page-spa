import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageOptimizationService } from '../../core/services/image-optimization.service';
import { ImageMappingService, ProjectImage } from '../../core/services/image-mapping.service';

interface OptimizationProgress {
  current: number;
  total: number;
  currentImage: string;
  progress: number;
}

@Component({
  selector: 'app-image-optimizer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="image-optimizer-container">
      <div class="optimizer-header">
        <h2>🎨 Optimizador de Imágenes Meridian</h2>
        <p>Optimiza las imágenes del proyecto para mejorar el rendimiento web</p>
      </div>

      <!-- Estadísticas Generales -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">{{ stats.total }}</div>
          <div class="stat-label">Total Imágenes</div>
        </div>
        <div class="stat-card success">
          <div class="stat-number">{{ stats.optimized }}</div>
          <div class="stat-label">Optimizadas</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-number">{{ stats.pending }}</div>
          <div class="stat-label">Pendientes</div>
        </div>
        <div class="stat-card info">
          <div class="stat-number">{{ stats.percentComplete }}%</div>
          <div class="stat-label">Completado</div>
        </div>
      </div>

      <!-- Progreso de Optimización -->
      <div class="progress-section" *ngIf="isOptimizing">
        <h3>Optimizando...</h3>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="optimizationProgress.progress"></div>
        </div>
        <p>{{ optimizationProgress.current }} de {{ optimizationProgress.total }} - {{ optimizationProgress.currentImage }}</p>
      </div>

      <!-- Lista de Imágenes -->
      <div class="images-section">
        <div class="section-header">
          <h3>📸 Imágenes del Proyecto</h3>
          <div class="actions">
            <button 
              class="btn btn-primary" 
              (click)="optimizeAllImages()"
              [disabled]="isOptimizing || stats.pending === 0">
              <span *ngIf="!isOptimizing">Optimizar Todas</span>
              <span *ngIf="isOptimizing">Optimizando...</span>
            </button>
            <button 
              class="btn btn-secondary" 
              (click)="loadProjectImages()">
              Recargar Lista
            </button>
          </div>
        </div>

        <!-- Filtros -->
        <div class="filters">
          <select [(ngModel)]="selectedProject" (change)="filterImages()" class="filter-select">
            <option value="">Todos los Proyectos</option>
            <option value="la-estrella">La Estrella</option>
            <option value="cabanas">Cabañas</option>
            <option value="renders">Renders</option>
          </select>
          <select [(ngModel)]="selectedCategory" (change)="filterImages()" class="filter-select">
            <option value="">Todas las Categorías</option>
            <option value="hero">Hero</option>
            <option value="gallery">Galería</option>
            <option value="before">Antes</option>
            <option value="after">Después</option>
            <option value="render">Render</option>
          </select>
        </div>

        <!-- Grid de Imágenes -->
        <div class="images-grid">
          <div 
            *ngFor="let image of filteredImages" 
            class="image-card"
            [ngClass]="{ 'optimized': image.isOptimized, 'processing': processingImages.has(image.id) }">
            
            <div class="image-preview">
              <img 
                [src]="getImagePreviewSrc(image)" 
                [alt]="image.alt"
                (error)="onImageError($event, image)">
              <div class="image-overlay" *ngIf="processingImages.has(image.id)">
                <div class="spinner"></div>
              </div>
            </div>
            
            <div class="image-info">
              <h4>{{ image.name }}</h4>
              <div class="image-meta">
                <span class="badge badge-project">{{ image.project }}</span>
                <span class="badge badge-category">{{ image.category }}</span>
              </div>
              
              <div class="image-details" *ngIf="image.metadata">
                <p><strong>Dimensiones:</strong> {{ image.metadata.width }}x{{ image.metadata.height }}px</p>
                <p><strong>Tamaño:</strong> {{ formatFileSize(image.metadata.size) }}</p>
                <p><strong>Formato:</strong> {{ image.metadata.format }}</p>
              </div>
              
              <div class="image-status">
                <span 
                  class="status-badge"
                  [ngClass]="{ 
                    'status-optimized': image.isOptimized, 
                    'status-pending': !image.isOptimized 
                  }">
                  {{ image.isOptimized ? '✅ Optimizada' : '⏳ Pendiente' }}
                </span>
              </div>
              
              <div class="image-actions">
                <button 
                  class="btn btn-sm btn-primary"
                  (click)="optimizeSingleImage(image)"
                  [disabled]="processingImages.has(image.id) || image.isOptimized">
                  {{ image.isOptimized ? 'Optimizada' : 'Optimizar' }}
                </button>
                <button 
                  class="btn btn-sm btn-secondary"
                  (click)="previewImage(image)">
                  Vista Previa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Log de Optimización -->
      <div class="log-section" *ngIf="optimizationLog.length > 0">
        <h3>📋 Log de Optimización</h3>
        <div class="log-container">
          <div 
            *ngFor="let log of optimizationLog" 
            class="log-entry"
            [ngClass]="log.type">
            <span class="log-time">{{ log.timestamp | date:'HH:mm:ss' }}</span>
            <span class="log-message">{{ log.message }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .image-optimizer-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .optimizer-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .optimizer-header h2 {
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      text-align: center;
      border-left: 4px solid #6c757d;
    }

    .stat-card.success { border-left-color: #28a745; }
    .stat-card.warning { border-left-color: #ffc107; }
    .stat-card.info { border-left-color: #17a2b8; }

    .stat-number {
      font-size: 2rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    .stat-label {
      color: #6c757d;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .progress-section {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 12px;
      margin-bottom: 2rem;
    }

    .progress-bar {
      width: 100%;
      height: 20px;
      background: #e9ecef;
      border-radius: 10px;
      overflow: hidden;
      margin: 1rem 0;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }

    .filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .filter-select {
      padding: 0.5rem 1rem;
      border: 1px solid #dee2e6;
      border-radius: 6px;
      background: white;
    }

    .images-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .image-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .image-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }

    .image-card.optimized {
      border: 2px solid #28a745;
    }

    .image-card.processing {
      opacity: 0.7;
    }

    .image-preview {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .image-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spinner {
      width: 30px;
      height: 30px;
      border: 3px solid #ffffff30;
      border-top: 3px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .image-info {
      padding: 1rem;
    }

    .image-info h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      color: var(--primary-color);
    }

    .image-meta {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .badge {
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .badge-project {
      background: #e3f2fd;
      color: #1976d2;
    }

    .badge-category {
      background: #f3e5f5;
      color: #7b1fa2;
    }

    .image-details {
      font-size: 0.85rem;
      color: #6c757d;
      margin-bottom: 1rem;
    }

    .image-details p {
      margin: 0.25rem 0;
    }

    .status-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .status-optimized {
      background: #d4edda;
      color: #155724;
    }

    .status-pending {
      background: #fff3cd;
      color: #856404;
    }

    .image-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
    }

    .btn-sm {
      padding: 0.25rem 0.75rem;
      font-size: 0.85rem;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .log-section {
      margin-top: 2rem;
    }

    .log-container {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1rem;
      max-height: 300px;
      overflow-y: auto;
    }

    .log-entry {
      display: flex;
      gap: 1rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid #dee2e6;
    }

    .log-entry.success { color: #28a745; }
    .log-entry.error { color: #dc3545; }
    .log-entry.info { color: #17a2b8; }

    .log-time {
      font-family: monospace;
      color: #6c757d;
      flex-shrink: 0;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .image-optimizer-container {
        padding: 1rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .section-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
      
      .filters {
        flex-direction: column;
      }
      
      .images-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ImageOptimizerComponent implements OnInit {
  stats = { total: 0, optimized: 0, pending: 0, percentComplete: 0 };
  allImages: ProjectImage[] = [];
  filteredImages: ProjectImage[] = [];
  selectedProject = '';
  selectedCategory = '';
  
  isOptimizing = false;
  processingImages = new Set<string>();
  
  optimizationProgress: OptimizationProgress = {
    current: 0,
    total: 0,
    currentImage: '',
    progress: 0
  };
  
  optimizationLog: Array<{
    timestamp: Date;
    message: string;
    type: 'success' | 'error' | 'info';
  }> = [];

  constructor(
    private imageOptimizationService: ImageOptimizationService,
    private imageMappingService: ImageMappingService
  ) {}

  ngOnInit() {
    this.loadProjectImages();
  }

  loadProjectImages() {
    this.allImages = this.imageMappingService.getUnoptimizedImages();
    this.filteredImages = [...this.allImages];
    this.updateStats();
    this.addLog('Imágenes del proyecto cargadas correctamente', 'info');
  }

  updateStats() {
    this.stats = this.imageMappingService.getOptimizationStats();
  }

  filterImages() {
    this.filteredImages = this.allImages.filter(image => {
      const matchesProject = !this.selectedProject || image.project === this.selectedProject;
      const matchesCategory = !this.selectedCategory || image.category === this.selectedCategory;
      return matchesProject && matchesCategory;
    });
  }

  async optimizeAllImages() {
    if (this.isOptimizing) return;
    
    this.isOptimizing = true;
    const imagesToOptimize = this.filteredImages.filter(img => !img.isOptimized);
    
    this.optimizationProgress = {
      current: 0,
      total: imagesToOptimize.length,
      currentImage: '',
      progress: 0
    };

    for (let i = 0; i < imagesToOptimize.length; i++) {
      const image = imagesToOptimize[i];
      this.optimizationProgress.current = i + 1;
      this.optimizationProgress.currentImage = image.name;
      this.optimizationProgress.progress = ((i + 1) / imagesToOptimize.length) * 100;
      
      await this.optimizeSingleImage(image, false);
    }

    this.isOptimizing = false;
    this.addLog(`Optimización completada: ${imagesToOptimize.length} imágenes procesadas`, 'success');
    this.updateStats();
  }

  async optimizeSingleImage(image: ProjectImage, updateStats = true) {
    if (this.processingImages.has(image.id) || image.isOptimized) return;
    
    this.processingImages.add(image.id);
    this.addLog(`Iniciando optimización de ${image.name}`, 'info');

    try {
      // Simular carga del archivo (en implementación real, cargaría desde assets)
      const mockFile = new File([], image.name, { 
        type: image.metadata?.format === 'PNG' ? 'image/png' : 'image/jpeg' 
      });
      
      // Generar múltiples versiones optimizadas
      const responsiveImages = await this.imageOptimizationService.generateResponsiveImages(mockFile);
      
      // Actualizar rutas en el servicio de mapeo
      const optimizedPaths = this.imageMappingService.generateOptimizedPaths(image);
      this.imageMappingService.markAsOptimized(image.id, optimizedPaths);
      
      // Actualizar estado local
      image.isOptimized = true;
      image.optimizedPath = optimizedPaths.optimized;
      image.webpPath = optimizedPaths.webp;
      image.thumbnailPath = optimizedPaths.thumbnail;
      
      this.addLog(
        `✅ ${image.name} optimizada: ${responsiveImages.hero.sizeDifference} (-${responsiveImages.hero.compressionRatio}%)`, 
        'success'
      );
    } catch (error) {
      this.addLog(`❌ Error optimizando ${image.name}: ${error}`, 'error');
    } finally {
      this.processingImages.delete(image.id);
      if (updateStats) {
        this.updateStats();
      }
    }
  }

  getImagePreviewSrc(image: ProjectImage): string {
    // En implementación real, devolvería la ruta optimizada si existe
    return image.thumbnailPath || `https://picsum.photos/300/200?random=${image.id}`;
  }

  onImageError(event: Event, image: ProjectImage) {
    const target = event.target as HTMLImageElement;
    target.src = `https://picsum.photos/300/200?random=${image.id}`;
  }

  previewImage(image: ProjectImage) {
    // Implementar modal de vista previa
    window.open(this.getImagePreviewSrc(image), '_blank');
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private addLog(message: string, type: 'success' | 'error' | 'info') {
    this.optimizationLog.unshift({
      timestamp: new Date(),
      message,
      type
    });
    
    // Mantener solo los últimos 50 logs
    if (this.optimizationLog.length > 50) {
      this.optimizationLog = this.optimizationLog.slice(0, 50);
    }
  }
}