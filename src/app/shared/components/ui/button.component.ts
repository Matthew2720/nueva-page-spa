import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClasses"
      (click)="handleClick($event)"
      [attr.aria-label]="ariaLabel">
      
      <!-- Loading Spinner -->
      <mat-spinner 
        *ngIf="loading" 
        class="button-spinner"
        [diameter]="spinnerSize">
      </mat-spinner>
      
      <!-- Left Icon -->
      <mat-icon 
        *ngIf="leftIcon && !loading" 
        class="button-icon button-icon-left">
        {{ leftIcon }}
      </mat-icon>
      
      <!-- Button Text -->
      <span class="button-text" [class.hidden]="loading && hideTextOnLoading">
        <ng-content></ng-content>
      </span>
      
      <!-- Right Icon -->
      <mat-icon 
        *ngIf="rightIcon && !loading" 
        class="button-icon button-icon-right">
        {{ rightIcon }}
      </mat-icon>
    </button>
  `,
  styles: [`
    .app-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-family: var(--font-primary, 'Roboto', sans-serif);
      font-weight: 500;
      text-decoration: none;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }

    .app-button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .app-button:focus {
      outline: 2px solid var(--brand-primary, #8B7355);
      outline-offset: 2px;
    }

    /* Sizes */
    .button-small {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      border-radius: 4px;
      height: 36px;
    }

    .button-medium {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 6px;
      height: 44px;
    }

    .button-large {
      padding: 1rem 2rem;
      font-size: 1.125rem;
      border-radius: 8px;
      height: 52px;
    }

    /* Variants */
    .button-primary {
      background: var(--brand-primary, #8B7355);
      color: var(--text-light, #ffffff);
      border-color: var(--brand-primary, #8B7355);
    }

    .button-primary:hover:not(:disabled) {
      background: var(--primary-brown-dark, #6d5a44);
      border-color: var(--primary-brown-dark, #6d5a44);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(139, 115, 85, 0.2);
    }

    .button-primary:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(139, 115, 85, 0.2);
    }

    .button-secondary {
      background: var(--bg-secondary, #f8f9fa);
      color: var(--text-primary, #333);
      border-color: var(--secondary-beige, #e9ecef);
    }

    .button-secondary:hover:not(:disabled) {
      background: var(--secondary-beige, #e9ecef);
      border-color: var(--brand-primary, #8B7355);
      color: var(--brand-primary, #8B7355);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .button-outline {
      background: transparent;
      color: var(--brand-primary, #8B7355);
      border-color: var(--brand-primary, #8B7355);
    }

    .button-outline:hover:not(:disabled) {
      background: var(--brand-primary, #8B7355);
      color: var(--text-light, #ffffff);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(139, 115, 85, 0.2);
    }

    .button-ghost {
      background: transparent;
      color: var(--brand-primary, #8B7355);
      border-color: transparent;
    }

    .button-ghost:hover:not(:disabled) {
      background: var(--bg-secondary, #f8f9fa);
      color: var(--primary-brown-dark, #6d5a44);
    }

    .button-danger {
      background: #dc3545;
      color: var(--text-light, #ffffff);
      border-color: #dc3545;
    }

    .button-danger:hover:not(:disabled) {
      background: #c82333;
      border-color: #c82333;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(220, 53, 69, 0.2);
    }

    /* Icons */
    .button-icon {
      font-size: 1.25em;
      width: 1.25em;
      height: 1.25em;
    }

    .button-icon-left {
      margin-right: 0.25rem;
    }

    .button-icon-right {
      margin-left: 0.25rem;
    }

    /* Loading State */
    .button-spinner {
      margin-right: 0.5rem;
    }

    .button-spinner ::ng-deep circle {
      stroke: currentColor;
    }

    .button-text.hidden {
      opacity: 0;
    }

    /* Full Width */
    .button-full-width {
      width: 100%;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .button-large {
        padding: 0.875rem 1.75rem;
        font-size: 1rem;
        height: 48px;
      }

      .button-medium {
        padding: 0.625rem 1.25rem;
        font-size: 0.875rem;
        height: 40px;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .app-button {
        transition: none;
        transform: none !important;
      }

      .app-button:hover:not(:disabled) {
        transform: none !important;
      }
    }

    /* Loading pulse animation */
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .app-button.loading {
      animation: pulse 1.5s ease-in-out infinite;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  @Input() ariaLabel?: string;
  @Input() hideTextOnLoading = false;

  @Output() buttonClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const classes = [
      'app-button',
      `button-${this.variant}`,
      `button-${this.size}`
    ];

    if (this.fullWidth) {
      classes.push('button-full-width');
    }

    if (this.loading) {
      classes.push('loading');
    }

    return classes.join(' ');
  }

  get spinnerSize(): number {
    switch (this.size) {
      case 'small': return 16;
      case 'large': return 24;
      default: return 20;
    }
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}