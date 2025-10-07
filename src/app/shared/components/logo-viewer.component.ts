import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-viewer">
      <h1>Candidatos a Logo Meridian</h1>
      <div class="logo-grid">
        <div class="logo-card" *ngFor="let logo of logos">
          <img [src]="logo.path" [alt]="logo.name" class="logo-image">
          <h3>{{ logo.name }}</h3>
          <p>{{ logo.size }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .logo-viewer {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: var(--color-primary);
      margin-bottom: 3rem;
    }

    .logo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .logo-card {
      background: var(--bg-primary);
      border: 1px solid var(--border-light);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .logo-image {
      max-width: 100%;
      max-height: 200px;
      object-fit: contain;
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 1rem;
      background: white;
    }

    h3 {
      color: var(--text-primary);
      margin: 1rem 0 0.5rem 0;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  `]
})
export class LogoViewerComponent {
  logos = [
    {
      name: 'Logo Candidato 1',
      path: 'assets/images/extracted/brand/logo-candidate-1.jpg',
      size: '57KB - Pequeño'
    },
    {
      name: 'Logo Candidato 2', 
      path: 'assets/images/extracted/brand/logo-candidate-2.jpg',
      size: '63KB - Pequeño'
    },
    {
      name: 'Logo Candidato 3',
      path: 'assets/images/extracted/brand/logo-candidate-3.jpg', 
      size: '53KB - Pequeño'
    },
    {
      name: 'Logo Candidato 4',
      path: 'assets/images/extracted/brand/logo-candidate-4.jpg',
      size: '52KB - Pequeño'
    }
  ];
}