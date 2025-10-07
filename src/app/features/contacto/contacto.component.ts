import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, CardComponent } from '../../shared/components';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    CardComponent
  ],
  template: `
    <div class="contact-page">
      <!-- Hero Section with Contact Form -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Contáctanos para tu proyecto</h1>
              <p class="hero-description">
                Estamos aquí para ayudarte a transformar tu hogar en un espacio único y acogedor. 
                Contáctanos y comencemos a crear juntos.
              </p>
              
              <div class="contact-info">
                <div class="contact-item">
                  <h6><strong>Conexión</strong></h6>
                  <p>+57 323 3311845</p>
                </div>
                <div class="contact-item">
                  <h6><strong>Asesoría</strong></h6>
                  <p>contacto&#64;meridian.com</p>
                </div>
              </div>
            </div>
            
            <div class="contact-form-wrapper">
              <app-card variant="elevated" class="contact-form-card">
                <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                  <div class="form-group">
                    <label for="name">Nombre del cliente</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      [(ngModel)]="formData.name"
                      placeholder="Ingrese su nombre aquí"
                      class="form-input">
                  </div>
                  
                  <div class="form-group">
                    <label for="email">Correo electrónico*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      [(ngModel)]="formData.email"
                      placeholder="Ingrese su correo aquí"
                      class="form-input"
                      required>
                  </div>
                  
                  <div class="form-group">
                    <label for="message">Mensaje o consulta*</label>
                    <textarea 
                      id="message" 
                      name="message"
                      [(ngModel)]="formData.message"
                      placeholder="Escriba su mensaje aquí"
                      class="form-textarea"
                      required
                      rows="4"></textarea>
                  </div>
                  
                  <app-button 
                    type="submit"
                    variant="primary" 
                    size="large"
                    class="submit-button"
                    [disabled]="!contactForm.valid">
                    Enviar consulta
                  </app-button>
                </form>
              </app-card>
            </div>
          </div>
        </div>
      </section>

      <!-- Location Section -->
      <section class="location-section">
        <div class="container">
          <div class="location-content">
            <div class="location-info">
              <h3 class="location-title">Ubicación</h3>
              <p class="location-description">
                Visítanos y descubre cómo transformamos espacios en tu hogar con un diseño único 
                y personalizado que refleja tu identidad.
              </p>
              
              <div class="location-details">
                <div class="location-item">
                  <h6><strong>Dirección</strong></h6>
                  <p>Calle 59a 66b - 14, Bello, Antioquia</p>
                </div>
                <div class="location-item">
                  <h6><strong>Horario</strong></h6>
                  <p>Lunes a Viernes<br>8am - 5:30pm</p>
                </div>
              </div>
            </div>
            
            <div class="map-wrapper">
              <app-card variant="outlined" class="map-card">
                <div class="map-placeholder">
                  <p>📍 Mapa de ubicación</p>
                  <p>Calle 59a 66b - 14, Bello, Antioquia</p>
                </div>
              </app-card>
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="philosophy-section">
        <div class="container">
          <div class="philosophy-content">
            <div class="philosophy-text">
              <h3 class="philosophy-title">Diseño de interiores personalizado</h3>
              <p class="philosophy-description">
                En Meridian, transformamos hogares en espacios modernos y acogedores, 
                reflejando la identidad de cada cliente con atención al detalle y calidad.
              </p>
              
              <div class="philosophy-images">
                <img src="https://picsum.photos/300/250?random=50" 
                     alt="wing chair beside suitcase and window" 
                     class="philosophy-img">
                <img src="https://picsum.photos/300/250?random=51" 
                     alt="black dining set near white wall" 
                     class="philosophy-img">
                <img src="https://picsum.photos/300/250?random=52" 
                     alt="brown wooden framed yellow padded chair" 
                     class="philosophy-img">
              </div>
              
              <app-button 
                variant="primary" 
                size="medium"
                class="contact-cta">
                Contáctanos
              </app-button>
            </div>
            
            <div class="philosophy-mission">
              <h3 class="mission-title">Nuestra filosofía de diseño</h3>
              <p class="mission-description">
                Cada proyecto es único, adaptado a tus necesidades y presupuesto, 
                creando ambientes que superan expectativas y destacan por su estética minimalista y lujosa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-page {
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
      background: linear-gradient(135deg, var(--color-background) 0%, var(--color-surface) 100%);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
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
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-item h6 {
      color: var(--color-primary);
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    .contact-item p {
      color: var(--color-text);
      font-size: 1rem;
      margin: 0;
    }

    /* Contact Form */
    .contact-form-wrapper {
      position: sticky;
      top: 2rem;
    }

    .contact-form-card {
      padding: 2rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 600;
      color: var(--color-text);
      font-size: 0.875rem;
    }

    .form-input,
    .form-textarea {
      padding: 0.75rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-md);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      font-family: inherit;
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .submit-button {
      margin-top: 1rem;
    }

    /* Location Section */
    .location-section {
      padding: 4rem 0;
      background: var(--color-surface);
    }

    .location-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .location-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }

    .location-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .location-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .location-item h6 {
      color: var(--color-primary);
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    .location-item p {
      color: var(--color-text);
      line-height: 1.5;
      margin: 0;
    }

    .map-card {
      padding: 2rem;
      height: 300px;
    }

    .map-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: var(--color-background);
      border-radius: var(--radius-md);
      color: var(--color-text-secondary);
      text-align: center;
    }

    .map-placeholder p:first-child {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    /* Philosophy Section */
    .philosophy-section {
      padding: 4rem 0;
      background: var(--color-background);
    }

    .philosophy-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .philosophy-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }

    .philosophy-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .philosophy-images {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .philosophy-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
    }

    .contact-cta {
      width: fit-content;
    }

    .mission-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }

    .mission-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .location-content {
        grid-template-columns: 1fr;
      }

      .philosophy-content {
        grid-template-columns: 1fr;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .location-title,
      .philosophy-title {
        font-size: 2rem;
      }

      .mission-title {
        font-size: 1.75rem;
      }

      .contact-form-wrapper {
        position: static;
      }

      .philosophy-images {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .location-title,
      .philosophy-title {
        font-size: 1.75rem;
      }

      .contact-form-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      // Aquí se implementaría el envío del formulario
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
}