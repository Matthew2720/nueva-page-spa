import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="proyectos-page">
      <section class="hero-section">
        <div class="container">
          <h1>Proyectos Únicos</h1>
          <p>Creemos que el hogar es más que cuatro paredes, es el reflejo de quienes somos, nuestra misión es transformar esos espacios en ambientes únicos, modernos y cálidos, donde cada detalle cuenta y cada elección habla de ti</p>
        </div>
      </section>
      
      <!-- Contenido temporal - será desarrollado en Fase 3 -->
      <section class="temp-content">
        <div class="container">
          <h2>Página en Desarrollo</h2>
          <p>Esta página será desarrollada completamente en la Fase 3 del proyecto.</p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .proyectos-page {
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
  `]
})
export class ProyectosComponent {}