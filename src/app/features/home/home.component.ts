import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <!-- Navigation Header -->
      <nav class="navigation">
        <div class="logo">
          <h2>Meridian</h2>
        </div>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
          <a routerLink="/proyectos" routerLinkActive="active">Proyectos</a>
          <a routerLink="/servicios" routerLinkActive="active">Servicios</a>
          <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
        </div>
      </nav>

      <header class="hero">
        <h1>Transformamos tu hogar en un sueño.</h1>
        <p class="subtitle">Diseños únicos que reflejan tu identidad personal.</p>
        <p class="description">Calidad, detalle, flexibilidad, estilo.</p>
        <button class="cta-button">Descubre</button>
        <div class="rating">★★★★★</div>
      </header>
      
      <section class="features">
        <div class="feature-card">
          <h3>🏠 Sobre Nosotros</h3>
          <p>Transformamos espacios en hogares únicos y acogedores, reflejando la identidad de cada cliente con atención al detalle.</p>
          <button class="discover-btn">Descubre</button>
        </div>
        
        <div class="feature-card">
          <h3>🎨 Diseño Personalizado</h3>
          <p>Transformamos espacios en hogares modernos y acogedores, reflejando la identidad de cada cliente.</p>
        </div>
        
        <div class="feature-card">
          <h3>✨ Galería Inspiradora</h3>
          <p>Proyectos únicos que reflejan la identidad y estilo de cada cliente.</p>
        </div>
      </section>

      <!-- Quick Navigation to Pages -->
      <section class="page-navigation">
        <h2>Navega por nuestro sitio</h2>
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
    
    /* Navigation */
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    
    .logo h2 {
      color: #8B7355;
      margin: 0;
      font-weight: 500;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 400;
      transition: color 0.3s ease;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      color: #8B7355;
      font-weight: 500;
    }
    
    /* Hero Section */
    .hero {
      text-align: center;
      margin: 0 2rem 4rem 2rem;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 12px;
    }
    
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 500;
      color: #333;
    }
    
    .subtitle {
      font-size: 1.25rem;
      color: #666;
      margin-bottom: 0.5rem;
    }
    
    .description {
      font-size: 1rem;
      color: #888;
      margin-bottom: 2rem;
    }
    
    .cta-button {
      background: #8B7355;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
      margin-bottom: 1rem;
    }
    
    .cta-button:hover {
      background: #6d5a44;
    }
    
    .rating {
      color: #ffd700;
      font-size: 1.2rem;
    }
    
    /* Features Section */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 0 2rem 4rem 2rem;
    }
    
    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-2px);
    }
    
    .feature-card h3 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .feature-card p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .discover-btn {
      background: transparent;
      border: 2px solid #8B7355;
      color: #8B7355;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .discover-btn:hover {
      background: #8B7355;
      color: white;
    }
    
    /* Page Navigation */
    .page-navigation {
      margin: 0 2rem;
      text-align: center;
    }
    
    .page-navigation h2 {
      color: #333;
      margin-bottom: 2rem;
      font-weight: 500;
    }
    
    .nav-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .nav-card {
      display: block;
      text-decoration: none;
      background: linear-gradient(135deg, #8B7355 0%, #6d5a44 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      transition: transform 0.3s ease;
    }
    
    .nav-card:hover {
      transform: translateY(-4px);
      text-decoration: none;
      color: white;
    }
    
    .nav-card h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
    
    .nav-card p {
      opacity: 0.9;
      margin: 0;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .navigation {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-links {
        gap: 1rem;
      }
      
      .hero h1 {
        font-size: 2rem;
      }
      
      .features, .nav-cards {
        grid-template-columns: 1fr;
      }
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