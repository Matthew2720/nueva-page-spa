import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="contacto-page">
      <section class="hero-section">
        <div class="container">
          <h1>Contáctanos para tu proyecto</h1>
          <p>Estamos aquí para ayudarte a transformar tu hogar en un espacio único y acogedor. Contáctanos y comencemos a crear juntos.</p>
        </div>
      </section>
      
      <!-- Contenido temporal - será desarrollado en Fase 3 -->
      <section class="temp-content">
        <div class="container">
          <h2>Página en Desarrollo</h2>
          <p>Esta página será desarrollada completamente en la Fase 3 del proyecto.</p>
          <div class="contact-info">
            <h3>Información de Contacto</h3>
            <p><strong>Teléfono:</strong> +57 323 3311845</p>
            <p><strong>Email:</strong> contacto&#64;meridianprojects.co</p>
            <p><strong>Dirección:</strong> Calle 59a 66b - 14, Bello, Antioquia</p>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .contacto-page {
      min-height: 100vh;
      padding-top: 2rem;
    }
    
    .hero-section {
      padding: 4rem 0;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: #333;
    }
    
    p {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.6;
      max-width: 800px;
    }
    
    .temp-content {
      padding: 3rem 0;
      text-align: center;
    }
    
    .temp-content h2 {
      color: #666;
      margin-bottom: 1rem;
    }
    
    .contact-info {
      margin-top: 2rem;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 8px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .contact-info h3 {
      margin-bottom: 1rem;
      color: #333;
    }
    
    .contact-info p {
      margin: 0.5rem 0;
      text-align: left;
    }
  `]
})
export class ContactoComponent {}