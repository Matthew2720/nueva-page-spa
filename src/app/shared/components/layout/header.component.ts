import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule
  ],
  template: `
    <header class="header">
      <div class="header-container">
        <!-- Logo -->
        <div class="logo-section">
          <a routerLink="/" class="logo-link">
            <div class="logo">
              <h2>Meridian</h2>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" [class.hidden]="isMobileMenuOpen">
          <ul class="nav-list">
            <li class="nav-item">
              <a 
                routerLink="/" 
                routerLinkActive="active" 
                [routerLinkActiveOptions]="{exact: true}"
                class="nav-link">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a 
                routerLink="/proyectos" 
                routerLinkActive="active"
                class="nav-link">
                Proyectos
              </a>
            </li>
            <li class="nav-item">
              <a 
                routerLink="/servicios" 
                routerLinkActive="active"
                class="nav-link">
                Servicios
              </a>
            </li>
            <li class="nav-item">
              <a 
                routerLink="/contacto" 
                routerLinkActive="active"
                class="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          mat-icon-button
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="isMobileMenuOpen"
          aria-label="Toggle navigation menu">
          <mat-icon>{{ isMobileMenuOpen ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav class="mobile-nav" [class.open]="isMobileMenuOpen">
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <a 
              routerLink="/" 
              routerLinkActive="active" 
              [routerLinkActiveOptions]="{exact: true}"
              class="mobile-nav-link"
              (click)="closeMobileMenu()">
              Inicio
            </a>
          </li>
          <li class="mobile-nav-item">
            <a 
              routerLink="/proyectos" 
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()">
              Proyectos
            </a>
          </li>
          <li class="mobile-nav-item">
            <a 
              routerLink="/servicios" 
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()">
              Servicios
            </a>
          </li>
          <li class="mobile-nav-item">
            <a 
              routerLink="/contacto" 
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: var(--bg-primary);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.3s ease;
      border-bottom: 1px solid var(--border-light);
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }

    /* Logo Section */
    .logo-section {
      flex-shrink: 0;
    }

    .logo-link {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .logo h2 {
      color: var(--color-primary);
      margin: 0;
      font-weight: 600;
      font-size: 1.75rem;
      transition: color 0.3s ease;
    }

    .logo-link:hover .logo h2 {
      color: var(--color-primary-hover);
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: flex;
      align-items: center;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-item {
      position: relative;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-primary);
      font-weight: 500;
      font-size: 1rem;
      padding: 0.5rem 0;
      position: relative;
      transition: all 0.3s ease;
      display: block;
    }

    .nav-link:hover {
      color: var(--color-primary);
    }

    .nav-link.active {
      color: var(--color-primary);
      font-weight: 600;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--color-primary);
      border-radius: 1px;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
      display: none;
      color: var(--color-primary);
    }

    /* Mobile Navigation */
    .mobile-nav {
      display: none;
      background: var(--bg-primary);
      border-top: 1px solid var(--border-light);
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .mobile-nav.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .mobile-nav-list {
      list-style: none;
      margin: 0;
      padding: 1rem 0;
    }

    .mobile-nav-item {
      border-bottom: 1px solid var(--border-light);
    }

    .mobile-nav-item:last-child {
      border-bottom: none;
    }

    .mobile-nav-link {
      text-decoration: none;
      color: var(--text-primary);
      font-weight: 500;
      font-size: 1.1rem;
      padding: 1rem 2rem;
      display: block;
      transition: all 0.3s ease;
    }

    .mobile-nav-link:hover,
    .mobile-nav-link.active {
      background: var(--bg-secondary);
      color: var(--color-primary);
      font-weight: 600;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .desktop-nav {
        display: none;
      }

      .mobile-menu-btn {
        display: flex;
      }

      .mobile-nav {
        display: block;
      }

      .header-container {
        padding: 0 1rem;
      }

      .logo h2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .header-container {
        height: 70px;
        padding: 0 0.75rem;
      }

      .logo h2 {
        font-size: 1.25rem;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .header,
      .mobile-nav,
      .nav-link,
      .mobile-nav-link,
      .logo h2 {
        transition: none;
      }
    }

    /* Focus states for accessibility */
    .nav-link:focus,
    .mobile-nav-link:focus,
    .logo-link:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
      border-radius: 4px;
    }

    .mobile-menu-btn:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
      border-radius: 4px;
    }
  `]
})
export class HeaderComponent {
  private router = inject(Router);

  isMobileMenuOpen = false;

  constructor() {
    // Close mobile menu on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}