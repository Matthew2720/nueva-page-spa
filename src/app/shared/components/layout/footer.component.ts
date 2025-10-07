import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <!-- Main Footer Content -->
        <div class="footer-content">
          <!-- Company Info -->
          <div class="footer-section company-section">
            <div class="footer-logo">
              <h3>Meridian</h3>
            </div>
            <p class="company-description">
              Transformando ideas en soluciones digitales innovadoras. 
              Especializados en desarrollo web, aplicaciones móviles y consultoría tecnológica.
            </p>
            <div class="social-links">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link"
                aria-label="LinkedIn">
                <mat-icon>account_box</mat-icon>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link"
                aria-label="GitHub">
                <mat-icon>code</mat-icon>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link"
                aria-label="Twitter">
                <mat-icon>alternate_email</mat-icon>
              </a>
              <a 
                href="mailto:info&#64;meridian.com" 
                class="social-link"
                aria-label="Email">
                <mat-icon>email</mat-icon>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section links-section">
            <h4 class="footer-title">Enlaces Rápidos</h4>
            <ul class="footer-links">
              <li><a routerLink="/" class="footer-link">Inicio</a></li>
              <li><a routerLink="/proyectos" class="footer-link">Proyectos</a></li>
              <li><a routerLink="/servicios" class="footer-link">Servicios</a></li>
              <li><a routerLink="/contacto" class="footer-link">Contacto</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-section services-section">
            <h4 class="footer-title">Servicios</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Desarrollo Web</a></li>
              <li><a href="#" class="footer-link">Aplicaciones Móviles</a></li>
              <li><a href="#" class="footer-link">Consultoría IT</a></li>
              <li><a href="#" class="footer-link">Mantenimiento</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-section contact-section">
            <h4 class="footer-title">Contacto</h4>
            <div class="contact-info">
              <div class="contact-item">
                <mat-icon class="contact-icon">location_on</mat-icon>
                <span>Ciudad de México, México</span>
              </div>
              <div class="contact-item">
                <mat-icon class="contact-icon">phone</mat-icon>
                <a href="tel:+525555551234" class="contact-link">+52 55 5555 1234</a>
              </div>
              <div class="contact-item">
                <mat-icon class="contact-icon">email</mat-icon>
                <a href="mailto:info@meridian.com" class="contact-link">info&#64;meridian.com</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="newsletter-section">
          <div class="newsletter-content">
            <h4 class="newsletter-title">Mantente Actualizado</h4>
            <p class="newsletter-description">
              Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones.
            </p>
          </div>
          <form class="newsletter-form" (ngSubmit)="onNewsletterSubmit()">
            <mat-form-field appearance="outline" class="newsletter-input">
              <mat-label>Tu email</mat-label>
              <input 
                matInput 
                type="email" 
                [(ngModel)]="newsletterEmail"
                name="newsletterEmail"
                placeholder="ejemplo@correo.com"
                required>
            </mat-form-field>
            <button 
              mat-raised-button 
              color="primary" 
              type="submit"
              class="newsletter-btn"
              [disabled]="!newsletterEmail">
              Suscribirse
            </button>
          </form>
        </div>

        <!-- Bottom Footer -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              © {{ currentYear }} Meridian. Todos los derechos reservados.
            </p>
            <div class="footer-bottom-links">
              <a href="#" class="footer-bottom-link">Política de Privacidad</a>
              <a href="#" class="footer-bottom-link">Términos de Servicio</a>
              <a href="#" class="footer-bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-dark, #2c3e50);
      color: var(--text-light, #ffffff);
      margin-top: auto;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1rem 0;
    }

    /* Main Footer Content */
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-logo h3 {
      color: var(--brand-primary, #8B7355);
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
      font-weight: 500;
    }

    .company-description {
      color: var(--text-muted, #bdc3c7);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }

    .footer-title {
      color: var(--text-light, #ffffff);
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      font-weight: 500;
      border-bottom: 2px solid var(--brand-primary, #8B7355);
      padding-bottom: 0.5rem;
      display: inline-block;
    }

    /* Social Links */
    .social-links {
      display: flex;
      gap: 0.75rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--brand-primary, #8B7355);
      color: var(--text-light, #ffffff);
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--primary-brown-dark, #6d5a44);
      transform: translateY(-2px);
    }

    .social-link mat-icon {
      font-size: 1.25rem;
    }

    /* Footer Links */
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-link {
      color: var(--text-muted, #bdc3c7);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.95rem;
    }

    .footer-link:hover {
      color: var(--brand-primary, #8B7355);
    }

    /* Contact Info */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--text-muted, #bdc3c7);
      font-size: 0.95rem;
    }

    .contact-icon {
      color: var(--brand-primary, #8B7355);
    }

    .contact-link {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: var(--brand-primary, #8B7355);
    }

    /* Newsletter Section */
    .newsletter-section {
      background: var(--bg-darker, #1a252f);
      margin: 0 -1rem;
      padding: 2rem 1rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
    }

    .newsletter-content {
      flex: 1;
      min-width: 250px;
    }

    .newsletter-title {
      color: var(--text-light, #ffffff);
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      font-weight: 500;
    }

    .newsletter-description {
      color: var(--text-muted, #bdc3c7);
      margin: 0;
      font-size: 0.95rem;
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
      flex: 1;
      min-width: 300px;
      align-items: flex-start;
    }

    .newsletter-input {
      flex: 1;
    }

    .newsletter-input ::ng-deep .mat-mdc-form-field-outline,
    .newsletter-input ::ng-deep .mat-mdc-text-field-wrapper {
      background: var(--bg-primary, #ffffff);
      border-radius: 4px;
    }

    .newsletter-btn {
      background: var(--brand-primary, #8B7355) !important;
      color: var(--text-light, #ffffff) !important;
      height: 56px;
      padding: 0 1.5rem;
      white-space: nowrap;
    }

    .newsletter-btn:hover {
      background: var(--primary-brown-dark, #6d5a44) !important;
    }

    /* Footer Bottom */
    .footer-bottom {
      border-top: 1px solid var(--border-dark, #34495e);
      padding: 1.5rem 0;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright {
      margin: 0;
      color: var(--text-muted, #bdc3c7);
      font-size: 0.9rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-bottom-link {
      color: var(--text-muted, #bdc3c7);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-link:hover {
      color: var(--brand-primary, #8B7355);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .footer-container {
        padding: 2rem 1rem 0;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .newsletter-section {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
      }

      .newsletter-form {
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
      }

      .newsletter-btn {
        width: 100%;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .footer-bottom-links {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer-container {
        padding: 1.5rem 0.75rem 0;
      }

      .social-links {
        justify-content: center;
      }

      .footer-bottom-links {
        flex-direction: column;
        gap: 0.75rem;
      }
    }

    /* Accessibility */
    .social-link:focus,
    .footer-link:focus,
    .contact-link:focus,
    .footer-bottom-link:focus {
      outline: 2px solid var(--brand-primary, #8B7355);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .social-link,
      .footer-link,
      .contact-link,
      .footer-bottom-link,
      .newsletter-btn {
        transition: none;
      }

      .social-link:hover {
        transform: none;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';

  onNewsletterSubmit(): void {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', this.newsletterEmail);
      
      // Reset form
      this.newsletterEmail = '';
      
      // You could show a success message here
      alert('¡Gracias por suscribirte a nuestro boletín!');
    }
  }
}