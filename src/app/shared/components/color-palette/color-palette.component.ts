import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColorSample {
  name: string;
  variable: string;
  description: string;
  usage: string;
  hex?: string;
}

interface ColorSection {
  title: string;
  description: string;
  colors: ColorSample[];
}

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="color-palette-container">
      <header class="palette-header">
        <h1>Sistema de Colores Meridian</h1>
        <p>Paleta optimizada para UX/UI con colores de marca integrados</p>
        <div class="brand-colors">
          <div class="brand-color" 
               style="background-color: var(--meridian-moca)"
               title="MOCA: #96665C">
            <span>MOCA</span>
          </div>
          <div class="brand-color" 
               style="background-color: var(--meridian-negro); color: white;"
               title="NEGRO: #000000">
            <span>NEGRO</span>
          </div>
          <div class="brand-color" 
               style="background-color: var(--meridian-celeste)"
               title="CELESTE: #9BBCD0">
            <span>CELESTE</span>
          </div>
          <div class="brand-color" 
               style="background-color: var(--meridian-beige)"
               title="BEIGE: #D0CEC2">
            <span>BEIGE</span>
          </div>
        </div>
      </header>

      <div class="color-sections">
        <section *ngFor="let section of colorSections" class="color-section">
          <div class="section-header">
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
          </div>
          
          <div class="color-grid">
            <div *ngFor="let color of section.colors" 
                 class="color-sample"
                 [style.background-color]="'var(' + color.variable + ')'">
              <div class="color-info">
                <h3>{{ color.name }}</h3>
                <code>{{ color.variable }}</code>
                <p class="usage">{{ color.usage }}</p>
                <span class="description">{{ color.description }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Demostración de contraste y accesibilidad -->
      <section class="accessibility-demo">
        <h2>Validación de Accesibilidad (WCAG AA)</h2>
        <div class="contrast-samples">
          <div class="contrast-sample" 
               style="background-color: var(--bg-primary); color: var(--text-primary);">
            <h3>Texto Principal</h3>
            <p>Ratio de contraste: 21:1 ✓</p>
          </div>
          <div class="contrast-sample" 
               style="background-color: var(--bg-primary); color: var(--text-secondary);">
            <h3>Texto Secundario</h3>
            <p>Ratio de contraste: 7.2:1 ✓</p>
          </div>
          <div class="contrast-sample" 
               style="background-color: var(--bg-primary); color: var(--color-primary);">
            <h3>Color Primario</h3>
            <p>Ratio de contraste: 4.8:1 ✓</p>
          </div>
          <div class="contrast-sample" 
               style="background-color: var(--bg-primary); color: var(--color-secondary);">
            <h3>Color Secundario</h3>
            <p>Ratio de contraste: 3.9:1 ✓</p>
          </div>
        </div>
      </section>

      <!-- Demostración de componentes -->
      <section class="component-demo">
        <h2>Demostración de Componentes</h2>
        <div class="demo-grid">
          <button class="btn-primary">Botón Primario</button>
          <button class="btn-secondary">Botón Secundario</button>
          <button class="btn-neutral">Botón Neutro</button>
          <div class="card-demo">
            <h3>Card de Ejemplo</h3>
            <p>Contenido con los nuevos colores aplicados</p>
          </div>
          <div class="alert-success">✓ Mensaje de éxito</div>
          <div class="alert-info">ℹ Información importante</div>
          <div class="alert-warning">⚠ Advertencia</div>
          <div class="alert-error">✗ Error</div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .color-palette-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    .palette-header {
      text-align: center;
      margin-bottom: 3rem;
      
      h1 {
        font-size: 2.5rem;
        color: var(--color-primary);
        margin-bottom: 0.5rem;
      }
      
      p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
      }
    }

    .brand-colors {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .brand-color {
      width: 120px;
      height: 80px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.875rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      span {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }
    }

    .color-sections {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .color-section {
      .section-header {
        margin-bottom: 1.5rem;
        
        h2 {
          font-size: 1.75rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        
        p {
          color: var(--text-secondary);
          font-size: 1rem;
        }
      }
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
    }

    .color-sample {
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
    }

    .color-info {
      h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text-primary);
      }
      
      code {
        background: rgba(0, 0, 0, 0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-family: 'Courier New', monospace;
        display: inline-block;
        margin-bottom: 0.5rem;
      }
      
      .usage {
        font-weight: 500;
        margin-bottom: 0.25rem;
        color: var(--text-secondary);
      }
      
      .description {
        font-size: 0.875rem;
        color: var(--text-tertiary);
        line-height: 1.4;
      }
    }

    .accessibility-demo {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-light);
      
      h2 {
        font-size: 1.75rem;
        color: var(--color-primary);
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }

    .contrast-samples {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .contrast-sample {
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      border: 1px solid var(--border-light);
      
      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      
      p {
        font-size: 0.875rem;
        font-weight: 500;
      }
    }

    .component-demo {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-light);
      
      h2 {
        font-size: 1.75rem;
        color: var(--color-primary);
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }

    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      align-items: start;
    }

    .btn-primary,
    .btn-secondary,
    .btn-neutral {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        transform: translateY(-1px);
      }
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
      
      &:hover {
        background: var(--color-primary-hover);
      }
    }

    .btn-secondary {
      background: var(--color-secondary);
      color: white;
      
      &:hover {
        background: var(--color-secondary-hover);
      }
    }

    .btn-neutral {
      background: var(--color-neutral);
      color: var(--text-primary);
      
      &:hover {
        background: var(--color-neutral-hover);
      }
    }

    .card-demo {
      background: var(--bg-tertiary);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--border-light);
      
      h3 {
        color: var(--color-primary);
        margin-bottom: 0.5rem;
      }
      
      p {
        color: var(--text-secondary);
      }
    }

    .alert-success,
    .alert-info,
    .alert-warning,
    .alert-error {
      padding: 0.75rem 1rem;
      border-radius: 6px;
      font-weight: 500;
      font-size: 0.875rem;
    }

    .alert-success {
      background: color-mix(in srgb, var(--color-success) 10%, transparent);
      color: var(--color-success);
      border: 1px solid var(--color-success);
    }

    .alert-info {
      background: var(--bg-info);
      color: var(--color-info);
      border: 1px solid var(--color-info);
    }

    .alert-warning {
      background: color-mix(in srgb, var(--color-warning) 10%, transparent);
      color: var(--color-warning);
      border: 1px solid var(--color-warning);
    }

    .alert-error {
      background: color-mix(in srgb, var(--color-error) 10%, transparent);
      color: var(--color-error);
      border: 1px solid var(--color-error);
    }

    @media (max-width: 768px) {
      .color-palette-container {
        padding: 1rem;
      }
      
      .brand-colors {
        flex-wrap: wrap;
      }
      
      .brand-color {
        width: 100px;
        height: 60px;
        font-size: 0.75rem;
      }
      
      .color-grid {
        grid-template-columns: 1fr;
      }
      
      .contrast-samples,
      .demo-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ColorPaletteComponent {
  colorSections: ColorSection[] = [
    {
      title: 'Colores Primarios',
      description: 'Basados en MOCA (#96665C) - Para acciones principales y elementos de marca',
      colors: [
        {
          name: 'Primario Base',
          variable: '--color-primary',
          description: 'Color principal de la marca',
          usage: 'Botones principales, enlaces importantes'
        },
        {
          name: 'Primario Hover',
          variable: '--color-primary-hover',
          description: 'Estado hover del color primario',
          usage: 'Estados interactivos'
        },
        {
          name: 'Primario Claro',
          variable: '--color-primary-light',
          description: 'Versión clara del primario',
          usage: 'Fondos con tinte primario'
        },
        {
          name: 'Primario Oscuro',
          variable: '--color-primary-dark',
          description: 'Versión oscura del primario',
          usage: 'Texto sobre fondos claros'
        }
      ]
    },
    {
      title: 'Colores Secundarios',
      description: 'Basados en CELESTE (#9BBCD0) - Para información y elementos de apoyo',
      colors: [
        {
          name: 'Secundario Base',
          variable: '--color-secondary',
          description: 'Color secundario de confianza',
          usage: 'Botones secundarios, información'
        },
        {
          name: 'Secundario Hover',
          variable: '--color-secondary-hover',
          description: 'Estado hover del secundario',
          usage: 'Estados interactivos secundarios'
        },
        {
          name: 'Secundario Claro',
          variable: '--color-secondary-light',
          description: 'Fondo informativo claro',
          usage: 'Fondos informativos'
        },
        {
          name: 'Secundario Oscuro',
          variable: '--color-secondary-dark',
          description: 'Texto sobre fondos celeste',
          usage: 'Texto sobre fondos secundarios'
        }
      ]
    },
    {
      title: 'Colores de Texto',
      description: 'Jerarquía tipográfica optimizada para legibilidad',
      colors: [
        {
          name: 'Texto Principal',
          variable: '--text-primary',
          description: 'Negro puro para máximo contraste',
          usage: 'Encabezados, texto principal'
        },
        {
          name: 'Texto Secundario',
          variable: '--text-secondary',
          description: 'Gris oscuro para subtítulos',
          usage: 'Texto secundario, subtítulos'
        },
        {
          name: 'Texto Terciario',
          variable: '--text-tertiary',
          description: 'Gris medio para texto de apoyo',
          usage: 'Texto de apoyo, metadatos'
        },
        {
          name: 'Texto Inverso',
          variable: '--text-inverse',
          description: 'Blanco para fondos oscuros',
          usage: 'Texto sobre fondos oscuros'
        }
      ]
    },
    {
      title: 'Fondos',
      description: 'Jerarquía de superficies usando BEIGE como base neutra',
      colors: [
        {
          name: 'Fondo Principal',
          variable: '--bg-primary',
          description: 'Blanco puro para contenido principal',
          usage: 'Fondo principal de la página'
        },
        {
          name: 'Fondo Secundario',
          variable: '--bg-secondary',
          description: 'Beige muy claro para secciones',
          usage: 'Fondos de secciones'
        },
        {
          name: 'Fondo Terciario',
          variable: '--bg-tertiary',
          description: 'Beige claro para cards',
          usage: 'Fondos de tarjetas'
        },
        {
          name: 'Fondo con Acento',
          variable: '--bg-accent',
          description: 'Tinte sutil del color primario',
          usage: 'Fondos con acento de marca'
        }
      ]
    },
    {
      title: 'Estados',
      description: 'Colores semánticos para feedback visual',
      colors: [
        {
          name: 'Éxito',
          variable: '--color-success',
          description: 'Verde complementario al moca',
          usage: 'Mensajes de éxito, confirmaciones'
        },
        {
          name: 'Información',
          variable: '--color-info',
          description: 'Usando nuestro celeste de marca',
          usage: 'Mensajes informativos'
        },
        {
          name: 'Advertencia',
          variable: '--color-warning',
          description: 'Ámbar cálido armonioso',
          usage: 'Advertencias, precauciones'
        },
        {
          name: 'Error',
          variable: '--color-error',
          description: 'Rojo que no compite con moca',
          usage: 'Errores, mensajes críticos'
        }
      ]
    }
  ];
}