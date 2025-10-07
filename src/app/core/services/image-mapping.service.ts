import { Injectable } from '@angular/core';

export interface ProjectImage {
  id: string;
  name: string;
  category: 'hero' | 'gallery' | 'before' | 'after' | 'render' | 'feature';
  project: 'la-estrella' | 'cabanas' | 'renders' | 'commercial';
  originalPath: string;
  optimizedPath?: string;
  webpPath?: string;
  thumbnailPath?: string;
  alt: string;
  description?: string;
  isOptimized: boolean;
  metadata?: {
    width: number;
    height: number;
    size: number;
    format: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ImageMappingService {
  
  private readonly imageDatabase: ProjectImage[] = [
    // LA ESTRELLA PROJECT - HERO IMAGES (REALES OPTIMIZADAS)
    {
      id: 'la-estrella-hero-1',
      name: 'la-estrella-hero-real.jpg',
      category: 'hero',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS Y VIDEOS PROYECTO 1 (LA ESTRELLA)/Fotos/_MG_7601-1.jpg',
      optimizedPath: 'assets/images/hero/la-estrella-hero-real.jpg',
      alt: 'Proyecto La Estrella - Sala remodelada con diseño moderno',
      description: 'Sala principal del proyecto La Estrella después de la remodelación',
      isOptimized: true,
      metadata: {
        width: 2000,
        height: 1333,
        size: 1240000, // 1.24MB
        format: 'JPEG'
      }
    },
    {
      id: 'la-estrella-hero-2',
      name: 'cocina-moderna-hero.jpg',
      category: 'hero',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS Y VIDEOS PROYECTO 1 (LA ESTRELLA)/Fotos/_MG_7620-1.jpg',
      optimizedPath: 'assets/images/hero/cocina-moderna-hero.jpg',
      alt: 'Proyecto La Estrella - Cocina moderna remodelada',
      description: 'Cocina del proyecto La Estrella con acabados contemporáneos',
      isOptimized: true,
      metadata: {
        width: 1333,
        height: 2000,
        size: 1370000, // 1.37MB
        format: 'JPEG'
      }
    },

    // LA ESTRELLA PROJECT - GALLERY BEFORE/AFTER (REALES)
    {
      id: 'la-estrella-gallery-before-1',
      name: 'sala-antes-real.jpg',
      category: 'before',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS ANTES PROYECTO 1 (LA ESTRELLA)/Fotos Proyectos Antes/IMG-20250204-WA0051.jpg',
      optimizedPath: 'assets/images/projects/la-estrella/before/sala-antes-real.jpg',
      alt: 'Estado inicial de la sala antes de la remodelación',
      description: 'Espacio original antes de la intervención arquitectónica',
      isOptimized: true
    },
    {
      id: 'la-estrella-gallery-after-1',
      name: 'sala-despues-real.jpg',
      category: 'after',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS Y VIDEOS PROYECTO 1 (LA ESTRELLA)/Fotos/_MG_7634-1.jpg',
      optimizedPath: 'assets/images/projects/la-estrella/after/sala-despues-real.jpg',
      alt: 'Sala completamente remodelada con diseño moderno',
      description: 'Transformación completa con diseño contemporáneo',
      isOptimized: true
    },
    {
      id: 'la-estrella-gallery-real-1',
      name: 'proyecto-real-1.jpg',
      category: 'gallery',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS Y VIDEOS PROYECTO 1 (LA ESTRELLA)/Fotos/_MG_7643-1.jpg',
      optimizedPath: 'assets/images/gallery/proyecto-real-1.jpg',
      alt: 'Proyecto La Estrella - Vista general remodelada',
      description: 'Resultado final con acabados de alta calidad',
      isOptimized: true
    },
    {
      id: 'la-estrella-gallery-real-2',
      name: 'proyecto-real-2.jpg',
      category: 'gallery',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS Y VIDEOS PROYECTO 1 (LA ESTRELLA)/Fotos/_MG_7655-1.jpg',
      optimizedPath: 'assets/images/gallery/proyecto-real-2.jpg',
      alt: 'Proyecto La Estrella - Detalles de diseño',
      description: 'Detalles arquitectónicos y de interiorismo',
      isOptimized: true
    },

    // RENDERS - FEATURE IMAGES (REALES OPTIMIZADOS)
    {
      id: 'render-cocina-1',
      name: 'cocina-moderna-render.png',
      category: 'render',
      project: 'renders',
      originalPath: 'assets/images/media/MÁS RENDERS/Renders/COCINA 1.1.png',
      optimizedPath: 'assets/images/media/renders/cocina-moderna-render.png',
      alt: 'Render 3D de cocina moderna con isla central',
      description: 'Render arquitectónico de cocina con diseño contemporáneo',
      isOptimized: true,
      metadata: {
        width: 1920,
        height: 1080,
        size: 2470000, // 2.47MB
        format: 'PNG'
      }
    },
    {
      id: 'render-baño-1',
      name: 'baño-moderno-render.png',
      category: 'render',
      project: 'renders',
      originalPath: 'assets/images/media/MÁS RENDERS/Renders/BAÑO 1.1.png',
      optimizedPath: 'assets/images/media/renders/baño-moderno-render.png',
      alt: 'Render 3D de baño moderno con acabados de lujo',
      description: 'Visualización arquitectónica de baño contemporáneo',
      isOptimized: true
    },
    {
      id: 'testimonio-proyecto-1',
      name: 'proyecto-testimonio-1.jpg',
      category: 'feature',
      project: 'la-estrella',
      originalPath: 'assets/images/media/FOTOS Y VIDEOS PROYECTO 1 (LA ESTRELLA)/Fotos/_MG_7657-1.jpg',
      optimizedPath: 'assets/images/testimonials/proyecto-testimonio-1.jpg',
      alt: 'Proyecto La Estrella - Testimonio visual del cliente',
      description: 'Resultado que respalda la satisfacción del cliente',
      isOptimized: true
    },

    // CABAÑAS PROJECT
    {
      id: 'cabanas-hero-1',
      name: 'cabana-exterior.jpg',
      category: 'hero',
      project: 'cabanas',
      originalPath: 'assets/images/original/FOTOS PROYECTO 2 CABAÑAS/',
      alt: 'Cabaña moderna con diseño arquitectónico único',
      isOptimized: false
    }
  ];

  // Obtener imágenes por categoría y proyecto
  getImagesByCategory(category: ProjectImage['category'], project?: ProjectImage['project']): ProjectImage[] {
    return this.imageDatabase.filter(img => {
      const matchesCategory = img.category === category;
      const matchesProject = !project || img.project === project;
      return matchesCategory && matchesProject;
    });
  }

  // Obtener imágenes hero para carrusel
  getHeroImages(): ProjectImage[] {
    return this.getImagesByCategory('hero');
  }

  // Obtener imágenes para galería de proyectos
  getProjectGalleryImages(project: ProjectImage['project']): { before: ProjectImage[], after: ProjectImage[] } {
    const beforeImages = this.getImagesByCategory('before', project);
    const afterImages = this.getImagesByCategory('after', project);
    return { before: beforeImages, after: afterImages };
  }

  // Obtener renders para sección de servicios
  getRenderImages(): ProjectImage[] {
    return this.getImagesByCategory('render');
  }

  // Obtener imagen por ID
  getImageById(id: string): ProjectImage | undefined {
    return this.imageDatabase.find(img => img.id === id);
  }

  // Mapeo específico para secciones del sitio web
  getImagesForProyectosPage(): {
    hero: ProjectImage[];
    gallery: ProjectImage[];
    testimonial: ProjectImage[];
  } {
    return {
      hero: this.getHeroImages().slice(0, 3),
      gallery: this.getImagesByCategory('after', 'la-estrella').slice(0, 4),
      testimonial: this.getImagesByCategory('after', 'la-estrella').slice(0, 1)
    };
  }

  getImagesForServiciosPage(): {
    hero: ProjectImage[];
    features: ProjectImage[];
    testimonials: ProjectImage[];
  } {
    return {
      hero: this.getRenderImages().slice(0, 1),
      features: this.getRenderImages().slice(0, 3),
      testimonials: this.getImagesByCategory('after').slice(0, 2)
    };
  }

  getImagesForContactoPage(): {
    hero: ProjectImage[];
    philosophy: ProjectImage[];
  } {
    return {
      hero: this.getHeroImages().slice(0, 1),
      philosophy: [
        ...this.getRenderImages().slice(0, 1),
        ...this.getImagesByCategory('after').slice(0, 1)
      ]
    };
  }

  // Actualizar estado de optimización
  markAsOptimized(id: string, paths: {
    optimized?: string;
    webp?: string;
    thumbnail?: string;
  }) {
    const image = this.getImageById(id);
    if (image) {
      image.isOptimized = true;
      image.optimizedPath = paths.optimized;
      image.webpPath = paths.webp;
      image.thumbnailPath = paths.thumbnail;
    }
  }

  // Obtener todas las imágenes no optimizadas
  getUnoptimizedImages(): ProjectImage[] {
    return this.imageDatabase.filter(img => !img.isOptimized);
  }

  // Estadísticas de optimización
  getOptimizationStats(): {
    total: number;
    optimized: number;
    pending: number;
    percentComplete: number;
  } {
    const total = this.imageDatabase.length;
    const optimized = this.imageDatabase.filter(img => img.isOptimized).length;
    const pending = total - optimized;
    const percentComplete = Math.round((optimized / total) * 100);

    return { total, optimized, pending, percentComplete };
  }

  // Generar rutas optimizadas basadas en convenciones
  generateOptimizedPaths(image: ProjectImage): {
    optimized: string;
    webp: string;
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  } {
    const basePath = image.originalPath.replace('original/', '').replace(/\.[^/.]+$/, '');
    
    return {
      optimized: `${basePath}-optimized.jpg`,
      webp: `${basePath}-optimized.webp`,
      thumbnail: `${basePath}-thumb.jpg`,
      mobile: `${basePath}-mobile.jpg`,
      tablet: `${basePath}-tablet.jpg`,
      desktop: `${basePath}-desktop.jpg`
    };
  }

  // Validar si una imagen existe
  async validateImageExists(path: string): Promise<boolean> {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
}