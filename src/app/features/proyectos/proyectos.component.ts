import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CardComponent } from '../../shared/components';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent
  ],
  template: `
    <div class="projects-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Proyectos Únicos</h1>
            <p class="hero-description">
              Creemos que el hogar es más que cuatro paredes, es el reflejo de quienes somos, 
              nuestra misión es transformar esos espacios en ambientes únicos, modernos y cálidos, 
              donde cada detalle cuenta y cada elección habla de ti
            </p>
            <div class="hero-image">
              <img src="assets/images/hero/la-estrella-hero-real.jpg" 
                   alt="Proyecto La Estrella - Sala remodelada con diseño moderno" 
                   class="hero-img">
            </div>
          </div>
        </div>
      </section>

      <!-- Design Features Section -->
      <section class="features-section">
        <div class="container">
          <div class="features-grid">
            
            <!-- Diseño Personalizado -->
            <div class="feature-item">
              <div class="feature-image">
                <img src="assets/images/media/renders/cocina-moderna-render.png" 
                     alt="Render 3D de cocina moderna con isla central" 
                     class="feature-img">
              </div>
              <div class="feature-content">
                <h5 class="feature-title"><strong>Diseño Personalizado</strong></h5>
                <p class="feature-description">
                  Transformamos espacios con atención al detalle y calidad, 
                  es darle nueva vida y nos sentimos honrados de acompañarte en ese viaje.
                </p>
                <app-button 
                  variant="outline" 
                  size="small"
                  class="feature-button">
                  Ver
                </app-button>
              </div>
            </div>

            <!-- Estilo Moderno -->
            <div class="feature-item">
              <div class="feature-images">
                <img src="assets/images/projects/la-estrella/before/sala-antes-real.jpg" 
                     alt="Estado inicial de la sala antes de la remodelación" 
                     class="feature-img">
                <img src="assets/images/projects/la-estrella/after/sala-despues-real.jpg" 
                     alt="Sala completamente remodelada con diseño moderno" 
                     class="feature-img">
              </div>
              <div class="feature-content">
                <h5 class="feature-title"><strong>Estilo Moderno</strong></h5>
                <p class="feature-description">
                  Creamos ambientes acogedores y personalizados para cada hogar.
                </p>
                <app-button 
                  variant="primary" 
                  size="small"
                  class="feature-button">
                  Explorar
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section class="gallery-section">
        <div class="container">
          <div class="gallery-header">
            <h3 class="gallery-title">Galería Proyectos</h3>
            <p class="gallery-description">
              Espacios únicos que reflejan la identidad de cada cliente.
            </p>
          </div>
          
          <div class="gallery-grid">
            <div class="gallery-item" *ngFor="let project of projects">
              <img [src]="project.image" 
                   [alt]="project.alt" 
                   class="gallery-img">
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonial Section -->
      <section class="testimonial-section">
        <div class="container">
          <app-card variant="elevated" class="testimonial-card">
            <div class="testimonial-content">
              <div class="testimonial-avatar">
                <img src="assets/images/testimonials/proyecto-testimonio-1.jpg" 
                     alt="Carlos Zuluaga" 
                     class="avatar-img">
              </div>
              <div class="testimonial-text">
                <p class="testimonial-quote">
                  "Transformaron mi hogar en un espacio moderno y acogedor, 
                  superando todas mis expectativas. ¡Recomiendo Meridian!"
                </p>
                <p class="testimonial-author">Carlos Zuluaga</p>
                <div class="testimonial-rating">
                  <span class="stars">★★★★★</span>
                </div>
              </div>
            </div>
            
            <div class="testimonial-images">
              <img src="assets/images/hero/cocina-moderna-hero.jpg" 
                   alt="Cocina moderna remodelada del proyecto La Estrella" 
                   class="testimonial-img">
              <img src="assets/images/gallery/proyecto-real-1.jpg" 
                   alt="Sala remodelada proyecto La Estrella" 
                   class="testimonial-img">
            </div>
          </app-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .projects-page {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* Hero Section */
    .hero-section {
      padding: 4rem 0;
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
      border-bottom: 1px solid var(--border-light);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 3rem;
    }

    .hero-image {
      margin-top: 2rem;
    }

    .hero-img {
      width: 100%;
      max-width: 600px;
      height: 400px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
    }

    /* Features Section */
    .features-section {
      padding: 4rem 0;
      background: var(--color-background);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 3rem;
      align-items: start;
    }

    .feature-item {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .feature-image,
    .feature-images {
      width: 100%;
    }

    .feature-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .feature-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
    }

    .feature-content {
      text-align: center;
    }

    .feature-title {
      font-size: 1.25rem;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }

    .feature-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .feature-button {
      margin: 0 auto;
    }

    /* Gallery Section */
    .gallery-section {
      padding: 4rem 0;
      background: var(--color-surface);
    }

    .gallery-header {  
      text-align: center;
      margin-bottom: 3rem;
    }

    .gallery-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }

    .gallery-description {
      font-size: 1.125rem;
      color: var(--color-text-secondary);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }

    .gallery-img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .gallery-img {
      transform: scale(1.05);
    }

    /* Testimonial Section */
    .testimonial-section {
      padding: 4rem 0;
      background: var(--color-background);
    }

    .testimonial-card {
      max-width: 900px;
      margin: 0 auto;
      padding: 3rem;
    }

    .testimonial-content {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .testimonial-avatar {
      flex-shrink: 0;
    }

    .avatar-img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: var(--shadow-md);
    }

    .testimonial-text {
      flex: 1;
    }

    .testimonial-quote {
      font-size: 1.125rem;
      color: var(--color-text);
      line-height: 1.6;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .testimonial-author {
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .stars {
      color: #fbbf24;
      font-size: 1.25rem;
    }

    .testimonial-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .testimonial-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius-md);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .feature-images {
        grid-template-columns: 1fr;
      }

      .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .testimonial-content {
        flex-direction: column;
        text-align: center;
      }

      .testimonial-images {
        grid-template-columns: 1fr;
      }

      .testimonial-card {
        padding: 2rem;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .gallery-title {
        font-size: 2rem;
      }

      .hero-img {
        height: 250px;
      }
    }
  `]
})
export class ProyectosComponent {
  projects = [
    {
      image: 'assets/images/gallery/proyecto-real-1.jpg',
      alt: 'Proyecto La Estrella - Vista general remodelada'
    },
    {
      image: 'assets/images/gallery/proyecto-real-2.jpg',
      alt: 'Proyecto La Estrella - Detalles de diseño'
    },
    {
      image: 'assets/images/hero/la-estrella-hero-real.jpg',
      alt: 'Proyecto La Estrella - Sala remodelada con diseño moderno'
    },
    {
      image: 'assets/images/hero/cocina-moderna-hero.jpg',
      alt: 'Proyecto La Estrella - Cocina moderna remodelada'
    }
  ];
}