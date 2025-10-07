import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  template: `
    <div class="services-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Diseño de Interiores</h1>
            <p class="hero-description">
              Transformamos hogares en espacios modernos y personalizados, 
              reflejando la identidad de cada cliente.
            </p>
            <div class="hero-image">
              <img src="https://picsum.photos/600/400?random=30" 
                   alt="Interior design hero image" 
                   class="hero-img">
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <div class="container">
          <div class="services-grid">
            
            <!-- Proyectos Personalizados -->
            <div class="service-item">
              <div class="service-content">
                <h6 class="service-title"><strong>Proyectos Personalizados</strong></h6>
                <p class="service-description">
                  Cada proyecto es único, adaptado a su estilo y presupuesto, 
                  garantizando calidad y detalle.
                </p>
              </div>
              <div class="service-images">
                <img src="https://picsum.photos/300/250?random=31" 
                     alt="two bikes parked beside wall inside room" 
                     class="service-img">
                <img src="https://picsum.photos/300/250?random=32" 
                     alt="black wooden cabinet beside white table" 
                     class="service-img">
                <img src="https://picsum.photos/300/250?random=33" 
                     alt="brown wooden dining table near white and brown mini bar" 
                     class="service-img">
              </div>
            </div>

            <!-- Estética Minimalista -->
            <div class="service-item">
              <div class="service-content">
                <h6 class="service-title"><strong>Estética Minimalista</strong></h6>
                <p class="service-description">
                  Utilizamos paletas de colores cálidos y sofisticados 
                  para crear ambientes acogedores y lujosos.
                </p>
              </div>
              <div class="service-images">
                <img src="https://picsum.photos/300/250?random=34" 
                     alt="Minimalist interior design" 
                     class="service-img">
                <img src="https://picsum.photos/300/250?random=35" 
                     alt="Warm color palette interior" 
                     class="service-img">
              </div>
            </div>

            <!-- Calidad y Flexibilidad -->
            <div class="service-item full-width">
              <div class="service-content">
                <h6 class="service-title"><strong>Calidad y Flexibilidad</strong></h6>
                <h6 class="service-subtitle">
                  <strong>Materiales de alta calidad y atención al detalle en cada etapa del diseño.</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Identity Section -->
      <section class="identity-section">
        <div class="container">
          <div class="identity-content">
            <div class="identity-text">
              <h3 class="identity-title">Diseño de interiores con identidad</h3>
              <p class="identity-description">
                En Meridian, transformamos hogares en espacios modernos y personalizados. 
                Cada proyecto refleja la identidad del cliente, combinando estética minimalista 
                con materiales de calidad y atención al detalle.
              </p>
              
              <div class="identity-features">
                <div class="feature">
                  <h6><strong>Tu espacio, tu estilo</strong></h6>
                </div>
                <div class="feature">
                  <h6><strong>Calidad en cada detalle</strong></h6>
                </div>
              </div>
              
              <p class="identity-mission">
                Nuestra misión es ser tu aliado en el diseño de ambientes, superando expectativas. 
                Con una paleta de colores única, creamos proyectos accesibles que inspiran y cautivan 
                sin importar el tamaño o presupuesto.
              </p>
            </div>
            
            <div class="identity-image">
              <img src="https://picsum.photos/500/400?random=36" 
                   alt="white kitchen room set" 
                   class="identity-img">
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <div class="container">
          <div class="testimonials-header">
            <h3 class="testimonials-title">Opiniones Clientes</h3>
            <p class="testimonials-description">
              Descubre lo que dicen nuestros clientes sobre sus experiencias únicas.
            </p>
          </div>
          
          <div class="testimonials-grid">
            <app-card 
              variant="elevated" 
              class="testimonial-card"
              *ngFor="let testimonial of testimonials">
              
              <div class="testimonial-content">
                <div class="testimonial-avatar">
                  <img [src]="testimonial.avatar" 
                       [alt]="testimonial.name" 
                       class="avatar-img">
                </div>
                
                <div class="testimonial-text">
                  <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
                  <h6 class="testimonial-name">{{ testimonial.name }}</h6>
                  <p class="testimonial-location">{{ testimonial.location }}</p>
                  <div class="testimonial-rating">
                    <span class="stars">{{ testimonial.rating }}</span>
                  </div>
                </div>
              </div>
            </app-card>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .services-page {
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
      border-radius: 12px;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--border-light);
    }

    /* Services Section */
    .services-section {
      padding: 4rem 0;
      background: var(--bg-primary);
    }

    .services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .service-item {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .service-item.full-width {
      grid-column: 1 / -1;
      text-align: center;
      padding: 2rem;
      background: var(--bg-accent);
      border-radius: 12px;
      border: 1px solid var(--border-light);
    }

    .service-content {
      order: 1;
    }

    .service-item:nth-child(even) .service-content {
      order: 2;
    }

    .service-title {
      font-size: 1.25rem;
      color: var(--color-primary);
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .service-subtitle {
      font-size: 1.125rem;
      color: var(--text-primary);
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .service-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .service-images {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      order: 2;
    }

    .service-item:nth-child(even) .service-images {
      order: 1;
    }

    .service-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--border-light);
      transition: transform 0.3s ease;
    }

    .service-img:hover {
      transform: scale(1.02);
    }

    /* Identity Section */
    .identity-section {
      padding: 4rem 0;
      background: var(--bg-accent);
    }

    .identity-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .identity-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }

    .identity-description,
    .identity-mission {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .identity-features {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .feature h6 {
      color: var(--color-primary);
      font-size: 1.125rem;
      font-weight: 600;
    }

    .identity-img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--border-light);
    }

    /* Testimonials Section */
    .testimonials-section {
      padding: 4rem 0;
      background: var(--bg-primary);
    }

    .testimonials-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .testimonials-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }

    .testimonials-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      padding: 2rem;
      background: var(--bg-tertiary);
      border: 1px solid var(--border-light);
    }

    .testimonial-content {
      display: flex;
      gap: 1.5rem;
      align-items: start;
    }

    .testimonial-avatar {
      flex-shrink: 0;
    }

    .avatar-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 2px solid var(--border-light);
    }

    .testimonial-text {
      flex: 1;
    }

    .testimonial-quote {
      font-size: 1rem;
      color: var(--text-primary);
      line-height: 1.6;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .testimonial-name {
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }

    .testimonial-location {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }

    .stars {
      color: var(--color-warning);
      font-size: 1rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-item:nth-child(even) .service-content {
        order: 1;
      }

      .service-item:nth-child(even) .service-images {
        order: 2;
      }

      .identity-content {
        grid-template-columns: 1fr;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .testimonial-content {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .identity-title {
        font-size: 2rem;
      }

      .testimonials-title {
        font-size: 2rem;
      }

      .hero-img {
        height: 250px;
      }
    }
  `]
})
export class ServiciosComponent {
  testimonials = [
    {
      name: 'Ana Pérez',
      location: 'Medellín',
      quote: 'Meridian transformó mi hogar en un espacio acogedor y moderno. ¡Increíble!',
      rating: '★★★★★',
      avatar: 'https://picsum.photos/60/60?random=40'
    },
    {
      name: 'Luis Gómez',
      location: 'Bogotá',
      quote: 'El equipo de Meridian entendió perfectamente mi visión y la llevó a la realidad. Cada detalle fue considerado, resultando en un ambiente que refleja mi estilo personal.',
      rating: '★★★★★',
      avatar: 'https://picsum.photos/60/60?random=41'
    }
  ];
}