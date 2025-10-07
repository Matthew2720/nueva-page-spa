import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <header class="hero">
        <h1>Bienvenido a Nueva Page SPA</h1>
        <p class="subtitle">Arquitectura limpia con Angular Standalone Components</p>
      </header>
      
      <section class="features">
        <div class="feature-card">
          <h3>🚀 Componentes Standalone</h3>
          <p>Usando la nueva API de componentes standalone de Angular para una arquitectura más limpia.</p>
        </div>
        
        <div class="feature-card">
          <h3>🏗️ Arquitectura Limpia</h3>
          <p>Estructura organizada con separación clara de responsabilidades.</p>
        </div>
        
        <div class="feature-card">
          <h3>⚡ Lazy Loading</h3>
          <p>Carga diferida de componentes para mejor rendimiento.</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      margin: 0;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .feature-card h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      color: #333;
      font-size: 1.25rem;
    }
    
    .feature-card p {
      color: #666;
      line-height: 1.6;
      margin: 0;
    }
  `]
})
export class HomeComponent {}