import { Injectable } from '@angular/core';

interface ImageOptimizationOptions {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  quality?: number;
  format?: 'jpeg' | 'webp' | 'auto';
}

interface OptimizedImage {
  original: File;
  optimized: File;
  compressionRatio: number;
  sizeDifference: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageOptimizationService {
  
  private loadImageCompressionLibrary(): Promise<any> {
    return new Promise((resolve, reject) => {
      if ((window as any).imageCompression) {
        resolve((window as any).imageCompression);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js';
      script.onload = () => {
        resolve((window as any).imageCompression);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async optimizeImage(file: File, options: ImageOptimizationOptions = {}): Promise<OptimizedImage> {
    const imageCompression = await this.loadImageCompressionLibrary();
    
    const defaultOptions = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      quality: 0.8
    };

    const compressionOptions = {
      ...defaultOptions,
      ...options,
      preserveExif: false // Para mejor compresión
    };

    try {
      const optimizedFile = await imageCompression(file, compressionOptions);
      
      const compressionRatio = ((file.size - optimizedFile.size) / file.size * 100);
      const sizeDifference = `${(file.size / 1024 / 1024).toFixed(2)}MB → ${(optimizedFile.size / 1024 / 1024).toFixed(2)}MB`;

      return {
        original: file,
        optimized: optimizedFile,
        compressionRatio: Math.round(compressionRatio),
        sizeDifference
      };
    } catch (error) {
      console.error('Error optimizing image:', error);
      throw error;
    }
  }

  async optimizeImageForWeb(file: File): Promise<OptimizedImage> {
    return this.optimizeImage(file, {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
      quality: 0.85
    });
  }

  async optimizeImageForHero(file: File): Promise<OptimizedImage> {
    return this.optimizeImage(file, {
      maxSizeMB: 0.8,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      quality: 0.9
    });
  }

  async optimizeImageForGallery(file: File): Promise<OptimizedImage> {
    return this.optimizeImage(file, {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 800,
      useWebWorker: true,
      quality: 0.8
    });
  }

  async optimizeImageForThumbnail(file: File): Promise<OptimizedImage> {
    return this.optimizeImage(file, {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 400,
      useWebWorker: true,
      quality: 0.75
    });
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async optimizeBatchImages(files: File[], options: ImageOptimizationOptions = {}): Promise<OptimizedImage[]> {
    const results: OptimizedImage[] = [];
    
    for (const file of files) {
      try {
        const optimized = await this.optimizeImage(file, options);
        results.push(optimized);
        console.log(`Optimized ${file.name}: ${optimized.sizeDifference} (-${optimized.compressionRatio}%)`);
      } catch (error) {
        console.error(`Error optimizing ${file.name}:`, error);
      }
    }
    
    return results;
  }

  // Detectar el mejor formato para la imagen
  getBestImageFormat(file: File): 'jpeg' | 'webp' {
    // WebP para imágenes con transparencia o alta compresión
    // JPEG para fotografías tradicionales
    const isPhoto = file.type === 'image/jpeg' || file.name.toLowerCase().includes('jpg');
    return isPhoto ? 'jpeg' : 'webp';
  }

  // Generar múltiples versiones de una imagen
  async generateResponsiveImages(file: File): Promise<{
    hero: OptimizedImage;
    desktop: OptimizedImage;
    tablet: OptimizedImage;
    mobile: OptimizedImage;
    thumbnail: OptimizedImage;
  }> {
    const [hero, desktop, tablet, mobile, thumbnail] = await Promise.all([
      this.optimizeImageForHero(file),
      this.optimizeImage(file, { maxWidthOrHeight: 1200, maxSizeMB: 0.5 }),
      this.optimizeImage(file, { maxWidthOrHeight: 768, maxSizeMB: 0.3 }),
      this.optimizeImage(file, { maxWidthOrHeight: 480, maxSizeMB: 0.2 }),
      this.optimizeImageForThumbnail(file)
    ]);

    return { hero, desktop, tablet, mobile, thumbnail };
  }
}