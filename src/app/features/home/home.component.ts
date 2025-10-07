import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent, CardComponent } from '../../shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, CardComponent],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <header class="hero">
        <h1>Transformamos tu hogar en un sueño.</h1>
        <p class="subtitle">Diseños únicos que reflejan tu identidad personal.</p>
        <p class="description">Calidad, detalle, flexibilidad, estilo.</p>
        <app-button 
          variant="primary" 
          size="large"
          rightIcon="arrow_forward"
          class="cta-button">
          Descubre
        </app-button>
        <div class="rating">★★★★★</div>
      </header>
      
      <!-- Features Section -->
      <section class="features">
        <app-card 
          title="Sobre Nosotros"
          icon="home"
          variant="elevated"
          class="feature-card">
          <p>Transformamos espacios en hogares únicos y acogedores, reflejando la identidad de cada cliente con atención al detalle.</p>
        </app-card>
        
        <app-card 
          title="Diseño Personalizado"
          icon="palette"
          variant="elevated"
          class="feature-card">
          <p>Transformamos espacios en hogares modernos y acogedores, reflejando la identidad de cada cliente.</p>
        </app-card>
        
        <app-card 
          title="Galería Inspiradora"
          icon="photo_library"
          variant="elevated"
          class="feature-card">
          <p>Proyectos únicos que reflejan la identidad y estilo de cada cliente.</p>
        </app-card>
      </section>

      <!-- Page Navigation -->
      <section class="page-navigation">
        <h2>Explora Nuestros Servicios</h2>
        <div class="nav-cards">
          <a routerLink="/proyectos" class="nav-card">
            <h3>Proyectos</h3>
            <p>Descubre nuestros proyectos únicos</p>
          </a>
          <a routerLink="/servicios" class="nav-card">
            <h3>Servicios</h3>
            <p>Conoce nuestros servicios de diseño</p>
          </a>
          <a routerLink="/contacto" class="nav-card">
            <h3>Contacto</h3>
            <p>Comencemos tu proyecto juntos</p>
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
    }
    
    /* Hero Section */
    .hero {
      text-align: center;
      margin: 0 2rem 4rem 2rem;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
      border-radius: 12px;
      border: 1px solid var(--border-light);
    }
    
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--color-primary);
    }
    
    .subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }
    
    .description {
      font-size: 1rem;
      color: var(--text-tertiary);
      margin-bottom: 2rem;
    }
    
    .cta-button {
      margin: 2rem 0;
    }
    
    .rating {
      margin-top: 1rem;
      font-size: 1.5rem;
      color: var(--color-warning);
    }
    
    /* Features Section */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 0 2rem 4rem 2rem;
    }
    
    /* Page Navigation */
    .page-navigation {
      margin: 0 2rem 4rem 2rem;
      text-align: center;
    }
    
    .page-navigation h2 {
      color: var(--color-primary);
      margin-bottom: 2rem;
      font-weight: 600;
      font-size: 2rem;
    }
    
    .nav-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .nav-card {
      display: block;
      text-decoration: none;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);
      color: var(--text-inverse);
      padding: 2rem;
      border-radius: 12px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 6px color-mix(in srgb, var(--color-primary) 20%, transparent);
      border: 1px solid var(--color-primary);
    }
    
    .nav-card:hover {
      transform: translateY(-4px);
      text-decoration: none;
      color: var(--text-inverse);
      box-shadow: 0 8px 25px color-mix(in srgb, var(--color-primary) 30%, transparent);
      background: linear-gradient(135deg, var(--color-primary-hover) 0%, var(--color-primary-active) 100%);
    }
    
    .nav-card h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .nav-card p {
      opacity: 0.95;
      margin: 0;
      line-height: 1.5;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .hero {
        margin: 0 1rem 3rem 1rem;
        padding: 3rem 1.5rem;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .features {
        grid-template-columns: 1fr;
        margin: 0 1rem 3rem 1rem;
        gap: 1.5rem;
      }
      
      .page-navigation {
        margin: 0 1rem 3rem 1rem;
      }
      
      .nav-cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero {
        padding: 2rem 1rem;
      }
      
      .hero h1 {
        font-size: 2rem;
      }
      
      .subtitle {
        font-size: 1.125rem;
      }
      
      .page-navigation h2 {
        font-size: 1.75rem;
      }
    }
    
    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .nav-card {
        transition: none;
      }
      
      .nav-card:hover {
        transform: none;
      }
    }
  `]
})
export class HomeComponent {}
