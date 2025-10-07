import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  template: `
    <div [class]="cardClasses" [attr.tabindex]="clickable ? 0 : undefined">
      <!-- Card Header -->
      <div class="card-header" *ngIf="hasHeader">
        <div class="card-header-content">
          <mat-icon *ngIf="icon" class="card-icon">{{ icon }}</mat-icon>
          <div class="card-title-section">
            <h3 *ngIf="title" class="card-title">{{ title }}</h3>
            <p *ngIf="subtitle" class="card-subtitle">{{ subtitle }}</p>
          </div>
        </div>
        <div class="card-header-actions" *ngIf="hasHeaderActions">
          <ng-content select="[slot=header-actions]"></ng-content>
        </div>
      </div>

      <!-- Card Image -->
      <div class="card-image-container" *ngIf="imageUrl">
        <img 
          [src]="imageUrl" 
          [alt]="imageAlt || title || 'Card image'"
          class="card-image"
          [loading]="imageLoading">
        <div class="card-image-overlay" *ngIf="hasImageOverlay">
          <ng-content select="[slot=image-overlay]"></ng-content>
        </div>
      </div>

      <!-- Card Content -->
      <div class="card-content" *ngIf="hasContent">
        <ng-content></ng-content>
      </div>

      <!-- Card Actions -->
      <div class="card-actions" *ngIf="hasActions">
        <ng-content select="[slot=actions]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .app-card {
      display: flex;
      flex-direction: column;
      background: var(--bg-primary, #ffffff);
      border-radius: var(--border-radius-lg, 8px);
      overflow: hidden;
      transition: all 0.3s ease;
      position: relative;
    }

    .app-card:focus {
      outline: 2px solid var(--brand-primary, #8B7355);
      outline-offset: 2px;
    }

    /* Card Variants */
    .card-default {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    }

    .card-elevated {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    }

    .card-elevated:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
    }

    .card-outlined {
      border: 1px solid var(--secondary-beige, #e9ecef);
      box-shadow: none;
    }

    .card-flat {
      box-shadow: none;
      border: none;
    }

    /* Clickable Cards */
    .card-clickable {
      cursor: pointer;
    }

    .card-clickable:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(139, 115, 85, 0.1);
    }

    /* Card Header */
    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid var(--secondary-beige, #e9ecef);
    }

    .card-header-content {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      flex: 1;
    }

    .card-icon {
      color: var(--brand-primary, #8B7355);
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      margin-top: 0.125rem;
    }

    .card-title-section {
      flex: 1;
    }

    .card-title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary, #333);
      line-height: 1.3;
    }

    .card-subtitle {
      margin: 0.25rem 0 0 0;
      font-size: 0.875rem;
      color: var(--text-muted, #666);
      line-height: 1.4;
    }

    .card-header-actions {
      flex-shrink: 0;
      margin-left: 1rem;
    }

    /* Card Image */
    .card-image-container {
      position: relative;
      overflow: hidden;
    }

    .card-image {
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }

    .card-clickable:hover .card-image {
      transform: scale(1.05);
    }

    .card-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.3) 100%
      );
      display: flex;
      align-items: flex-end;
      padding: 1rem;
      color: var(--text-light, #ffffff);
    }

    /* Card Content */
    .card-content {
      padding: 1.5rem;
      flex: 1;
    }

    .card-content :first-child {
      margin-top: 0;
    }

    .card-content :last-child {
      margin-bottom: 0;
    }

    /* Card Actions */
    .card-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--secondary-beige, #e9ecef);
      background: var(--bg-secondary, #f8f9fa);
    }

    .card-actions:empty {
      display: none;
    }

    /* Compact Cards */
    .card-compact .card-header {
      padding: 1rem;
    }

    .card-compact .card-content {
      padding: 1rem;
    }

    .card-compact .card-actions {
      padding: 0.75rem 1rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .card-header {
        padding: 1rem;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      .card-header-content {
        align-items: center;
      }

      .card-header-actions {
        margin-left: 0;
        align-self: flex-end;
      }

      .card-content {
        padding: 1rem;
      }

      .card-actions {
        padding: 1rem;
        flex-wrap: wrap;
      }

      .card-title {
        font-size: 1.125rem;
      }
    }

    @media (max-width: 480px) {
      .card-header {
        padding: 0.75rem;
      }

      .card-content {
        padding: 0.75rem;
      }

      .card-actions {
        padding: 0.75rem;
      }

      .card-title {
        font-size: 1rem;
      }

      .card-subtitle {
        font-size: 0.8125rem;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .app-card,
      .card-image {
        transition: none;
      }

      .card-clickable:hover,
      .card-elevated:hover {
        transform: none;
      }

      .card-clickable:hover .card-image {
        transform: none;
      }
    }

    /* Loading State */
    .card-loading {
      position: relative;
      overflow: hidden;
    }

    .card-loading::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.8),
        transparent
      );
      animation: shimmer 1.5s infinite;
      z-index: 1;
    }

    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    /* Hover States for Interactive Elements */
    .card-content ::ng-deep a {
      color: var(--brand-primary, #8B7355);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .card-content ::ng-deep a:hover {
      color: var(--primary-brown-dark, #6d5a44);
      text-decoration: underline;
    }
  `]
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() icon?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() imageLoading: 'lazy' | 'eager' = 'lazy';
  @Input() clickable = false;
  @Input() compact = false;
  @Input() loading = false;

  get cardClasses(): string {
    const classes = [
      'app-card',
      `card-${this.variant}`
    ];

    if (this.clickable) {
      classes.push('card-clickable');
    }

    if (this.compact) {
      classes.push('card-compact');
    }

    if (this.loading) {
      classes.push('card-loading');
    }

    return classes.join(' ');
  }

  get hasHeader(): boolean {
    return !!(this.title || this.subtitle || this.icon || this.hasHeaderActions);
  }

  get hasHeaderActions(): boolean {
    // This would be determined by checking if there's content in the header-actions slot
    // For now, we'll assume it's false, but in a real implementation you'd check the content projection
    return false;
  }

  get hasContent(): boolean {
    // This would check if there's content projected into the default slot
    return true; // Assuming there's always content for now
  }

  get hasActions(): boolean {
    // This would check if there's content projected into the actions slot
    return false; // For now, assuming no actions unless explicitly added
  }

  get hasImageOverlay(): boolean {
    // This would check if there's content projected into the image-overlay slot
    return false; // For now, assuming no overlay unless explicitly added
  }
}