import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ResponsiveImageSources {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  hero?: string;
}

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <picture #pictureElement class="optimized-image-container">
      <!-- WebP sources for modern browsers -->
      <source 
        *ngIf="webpSources.hero"
        [srcset]="webpSources.hero" 
        media="(min-width: 1200px)" 
        type="image/webp">
      <source 
        *ngIf="webpSources.desktop"
        [srcset]="webpSources.desktop" 
        media="(min-width: 768px)" 
        type="image/webp">
      <source 
        *ngIf="webpSources.tablet"
        [srcset]="webpSources.tablet" 
        media="(min-width: 480px)" 
        type="image/webp">
      <source 
        *ngIf="webpSources.mobile"
        [srcset]="webpSources.mobile" 
        type="image/webp">
      
      <!-- Fallback JPEG sources -->
      <source 
        *ngIf="sources.hero"
        [srcset]="sources.hero" 
        media="(min-width: 1200px)">
      <source 
        *ngIf="sources.desktop"
        [srcset]="sources.desktop" 
        media="(min-width: 768px)">
      <source 
        *ngIf="sources.tablet"
        [srcset]="sources.tablet" 
        media="(min-width: 480px)">
      
      <!-- Main image element with lazy loading -->
      <img 
        [src]="sources.mobile || sources.desktop || fallbackSrc"
        [alt]="alt"
        [class]="imageClasses"
        [loading]="lazyLoad ? 'lazy' : 'eager'"
        [decoding]="'async'"
        (load)="onImageLoad()"
        (error)="onImageError($event)"
        #imageElement>
    </picture>
    
    <!-- Loading placeholder -->
    <div 
      *ngIf="isLoading && showPlaceholder" 
      class="image-placeholder"
      [ngClass]="placeholderClass">
      <div class="loading-spinner"></div>
    </div>
    
    <!-- Error fallback -->
    <div 
      *ngIf="hasError" 
      class="image-error"
      [ngClass]="errorClass">
      <span>Error loading image</span>
    </div>
  `,
  styles: [`
    .optimized-image-container {
      display: block;
      width: 100%;
      height: 100%;
    }

    .optimized-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.3s ease;
    }

    .image-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
      width: 100%;
      height: 200px;
      position: relative;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid var(--primary-color, #007bff);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .image-error {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8f9fa;
      color: #6c757d;
      width: 100%;
      height: 200px;
      border: 1px solid #dee2e6;
      border-radius: 4px;
    }

    /* Responsive image classes */
    .img-hero {
      height: 60vh;
      min-height: 400px;
      object-position: center center;
    }

    .img-gallery {
      height: 250px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .img-thumbnail {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    .img-card {
      height: 200px;
      border-radius: 8px 8px 0 0;
    }

    .img-feature {
      height: 300px;
      border-radius: 12px;
    }

    /* Intersection Observer fade-in */
    .fade-in {
      opacity: 0;
      transition: opacity 0.6s ease;
    }

    .fade-in.loaded {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .img-hero {
        height: 40vh;
        min-height: 250px;
      }
      
      .img-gallery {
        height: 200px;
      }
      
      .img-feature {
        height: 200px;
      }
    }
  `]
})
export class OptimizedImageComponent implements OnInit, OnDestroy {
  @Input() sources: ResponsiveImageSources = {};
  @Input() webpSources: ResponsiveImageSources = {};
  @Input() alt: string = '';
  @Input() fallbackSrc: string = '';
  @Input() imageType: 'hero' | 'gallery' | 'thumbnail' | 'card' | 'feature' = 'gallery';
  @Input() lazyLoad: boolean = true;
  @Input() showPlaceholder: boolean = true;
  @Input() placeholderClass: string = '';
  @Input() errorClass: string = '';
  @Input() fadeIn: boolean = true;

  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;
  @ViewChild('pictureElement') pictureElement!: ElementRef<HTMLPictureElement>;

  isLoading: boolean = true;
  hasError: boolean = false;
  imageClasses: string = '';

  private intersectionObserver?: IntersectionObserver;

  ngOnInit() {
    this.setupImageClasses();
    
    if (this.lazyLoad && this.fadeIn) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupImageClasses() {
    const baseClasses = [`img-${this.imageType}`];
    
    if (this.fadeIn) {
      baseClasses.push('fade-in');
    }
    
    this.imageClasses = baseClasses.join(' ');
  }

  private setupIntersectionObserver() {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLElement;
            img.classList.add('loaded');
            this.intersectionObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
  }

  onImageLoad() {
    this.isLoading = false;
    this.hasError = false;
    
    if (this.fadeIn && this.imageElement) {
      this.imageElement.nativeElement.classList.add('loaded');
    }
    
    // Setup intersection observer for lazy loaded images
    if (this.lazyLoad && this.intersectionObserver && this.pictureElement) {
      this.intersectionObserver.observe(this.pictureElement.nativeElement);
    }
  }

  onImageError(event: Event) {
    this.isLoading = false;
    this.hasError = true;
    
    // Try fallback source if available
    if (this.fallbackSrc && this.imageElement) {
      const img = this.imageElement.nativeElement;
      if (img.src !== this.fallbackSrc) {
        img.src = this.fallbackSrc;
        return;
      }
    }
    
    console.error('Failed to load image:', event);
  }

  // Public method to preload image
  preloadImage(): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = this.sources.desktop || this.sources.mobile || this.fallbackSrc;
    });
  }
}