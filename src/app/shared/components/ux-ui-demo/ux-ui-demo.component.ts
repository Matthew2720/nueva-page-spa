import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ux-ui-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ux-demo-container">
      <header class="demo-header">
        <h1>Demostración UX/UI - Colores Meridian</h1>
        <p>Análisis de cómo los colores de marca mejoran la experiencia de usuario</p>
      </header>

      <!-- Sección de Comparación Antes/Después -->
      <section class="comparison-section">
        <h2>Comparación: Antes vs Después</h2>
        <div class="comparison-grid">
          <div class="comparison-card old-style">
            <h3>Anterior</h3>
            <div class="sample-ui">
              <div class="old-button">Botón Principal</div>
              <div class="old-text">Texto secundario con contraste limitado</div>
              <div class="old-card">
                <h4>Card de ejemplo</h4>
                <p>Contenido con colores genéricos</p>
              </div>
            </div>
            <div class="issues">
              <h4>❌ Problemas UX:</h4>
              <ul>
                <li>Bajo contraste (2.8:1)</li>
                <li>Sin identidad de marca</li>
                <li>Jerarquía visual pobre</li>
                <li>Colores genéricos</li>
              </ul>
            </div>
          </div>

          <div class="comparison-card new-style">
            <h3>Nuevo Sistema Meridian</h3>
            <div class="sample-ui">
              <div class="new-button">Botón Principal</div>
              <div class="new-text">Texto con contraste optimizado</div>
              <div class="new-card">
                <h4>Card de ejemplo</h4>
                <p>Contenido con colores de marca</p>
              </div>
            </div>
            <div class="benefits">
              <h4>✅ Beneficios UX:</h4>
              <ul>
                <li>Alto contraste (4.8:1) WCAG AA ✓</li>
                <li>Identidad Meridian consistente</li>
                <li>Jerarquía visual clara</li>
                <li>Colores armoniosos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Análisis de Armonía Cromática -->
      <section class="harmony-section">
        <h2>Análisis de Armonía Cromática</h2>
        <div class="harmony-grid">
          <div class="harmony-card">
            <h3>🎨 MOCA (#96665C)</h3>
            <div class="color-sample moca-sample"></div>
            <p><strong>Rol:</strong> Color principal de confianza</p>
            <p><strong>Psicología:</strong> Calidez, estabilidad, elegancia</p>
            <p><strong>Uso:</strong> Botones primarios, encabezados</p>
          </div>

          <div class="harmony-card">
            <h3>💧 CELESTE (#9BBCD0)</h3>
            <div class="color-sample celeste-sample"></div>
            <p><strong>Rol:</strong> Color de información y calma</p>
            <p><strong>Psicología:</strong> Confianza, profesionalismo</p>
            <p><strong>Uso:</strong> Elementos informativos, feedback</p>
          </div>

          <div class="harmony-card">
            <h3>🏺 BEIGE (#D0CEC2)</h3>
            <div class="color-sample beige-sample"></div>
            <p><strong>Rol:</strong> Base neutra versátil</p>
            <p><strong>Psicología:</strong> Serenidad, neutralidad</p>
            <p><strong>Uso:</strong> Fondos, elementos de apoyo</p>
          </div>

          <div class="harmony-card">
            <h3>⚫ NEGRO (#000000)</h3>
            <div class="color-sample negro-sample"></div>
            <p><strong>Rol:</strong> Máximo contraste y elegancia</p>
            <p><strong>Psicología:</strong> Sofisticación, claridad</p>
            <p><strong>Uso:</strong> Texto principal, detalles</p>
          </div>
        </div>
      </section>

      <!-- Demostración de Casos de Uso -->
      <section class="use-cases-section">
        <h2>Casos de Uso Optimizados</h2>
        
        <div class="use-case">
          <h3>1. Navegación Principal</h3>
          <div class="demo-nav">
            <div class="nav-item active">Inicio</div>
            <div class="nav-item">Proyectos</div>
            <div class="nav-item">Servicios</div>
            <div class="nav-item">Contacto</div>
          </div>
          <p>✅ Color primario para estado activo, contraste 4.8:1</p>
        </div>

        <div class="use-case">
          <h3>2. Sistema de Cards</h3>
          <div class="cards-demo">
            <div class="demo-card primary">
              <h4>Proyecto Destacado</h4>
              <p>Card con acento primario</p>
            </div>
            <div class="demo-card secondary">
              <h4>Información</h4>
              <p>Card informativa</p>
            </div>
            <div class="demo-card neutral">
              <h4>Contenido</h4>
              <p>Card neutra</p>
            </div>
          </div>
          <p>✅ Jerarquía visual clara con colores semánticos</p>
        </div>

        <div class="use-case">
          <h3>3. Estados de Interacción</h3>
          <div class="states-demo">
            <button class="state-btn normal">Normal</button>
            <button class="state-btn hover">:hover</button>
            <button class="state-btn active">:active</button>
            <button class="state-btn focus">:focus</button>
          </div>
          <p>✅ Feedback visual consistente en todos los estados</p>
        </div>

        <div class="use-case">
          <h3>4. Sistema de Alertas</h3>
          <div class="alerts-demo">
            <div class="alert success">✓ Proyecto guardado exitosamente</div>
            <div class="alert info">ℹ Nueva actualización disponible</div>
            <div class="alert warning">⚠ Revisa los datos ingresados</div>
            <div class="alert error">✗ Error al procesar la solicitud</div>
          </div>
          <p>✅ Colores semánticos que no compiten con la marca</p>
        </div>
      </section>

      <!-- Métricas de Accesibilidad -->
      <section class="accessibility-metrics">
        <h2>📊 Métricas de Accesibilidad</h2>
        <div class="metrics-grid">
          <div class="metric-card excellent">
            <h3>21:1</h3>
            <p>Contraste texto principal</p>
            <span class="badge">AAA</span>
          </div>
          <div class="metric-card good">
            <h3>7.2:1</h3>
            <p>Contraste texto secundario</p>
            <span class="badge">AA</span>
          </div>
          <div class="metric-card good">
            <h3>4.8:1</h3>
            <p>Contraste color primario</p>
            <span class="badge">AA</span>
          </div>
          <div class="metric-card good">
            <h3>3.9:1</h3>
            <p>Contraste color secundario</p>
            <span class="badge">AA</span>
          </div>
        </div>
      </section>

      <!-- Recomendaciones de Implementación -->
      <section class="recommendations">
        <h2>🎯 Recomendaciones de Implementación</h2>
        <div class="recommendations-grid">
          <div class="recommendation-card">
            <h3>1. Consistencia</h3>
            <p>Usa las variables CSS definidas en todo el proyecto para mantener consistencia visual</p>
            <code>color: var(--color-primary);</code>
          </div>
          <div class="recommendation-card">
            <h3>2. Jerarquía</h3>
            <p>Aplica colores según importancia: primario para acciones principales, secundario para información</p>
          </div>
          <div class="recommendation-card">
            <h3>3. Contraste</h3>
            <p>Siempre valida que el contraste cumpla WCAG AA (4.5:1) para texto normal</p>
          </div>
          <div class="recommendation-card">
            <h3>4. Contexto</h3>
            <p>Usa colores semánticos para estados (success, warning, error) sin competir con la marca</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .ux-demo-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    .demo-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-secondary) 100%);
      border-radius: 12px;
      border: 1px solid var(--border-light);
      
      h1 {
        font-size: 2.5rem;
        color: var(--color-primary);
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      
      p {
        font-size: 1.125rem;
        color: var(--text-secondary);
      }
    }

    .comparison-section,
    .harmony-section,
    .use-cases-section,
    .accessibility-metrics,
    .recommendations {
      margin-bottom: 4rem;
      
      h2 {
        font-size: 2rem;
        color: var(--color-primary);
        margin-bottom: 2rem;
        text-align: center;
        font-weight: 600;
      }
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .comparison-card {
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid var(--border-light);
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
        font-weight: 600;
      }
    }

    .old-style {
      background: #f5f5f5;
      
      h3 {
        color: #666;
      }
      
      .old-button {
        background: #ccc;
        color: #666;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        text-align: center;
      }
      
      .old-text {
        color: #888;
        margin-bottom: 1rem;
      }
      
      .old-card {
        background: #eee;
        padding: 1rem;
        border-radius: 6px;
        border: 1px solid #ddd;
        margin-bottom: 1rem;
        
        h4 {
          color: #666;
          margin-bottom: 0.5rem;
        }
        
        p {
          color: #888;
          margin: 0;
        }
      }
      
      .issues {
        h4 {
          color: #d63384;
          font-size: 1rem;
        }
        
        ul li {
          color: #666;
          font-size: 0.875rem;
        }
      }
    }

    .new-style {
      background: var(--bg-secondary);
      
      h3 {
        color: var(--color-primary);
      }
      
      .new-button {
        background: var(--color-primary);
        color: var(--text-inverse);
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          background: var(--color-primary-hover);
          transform: translateY(-1px);
        }
      }
      
      .new-text {
        color: var(--text-secondary);
        margin-bottom: 1rem;
      }
      
      .new-card {
        background: var(--bg-tertiary);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--border-light);
        margin-bottom: 1rem;
        
        h4 {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        p {
          color: var(--text-secondary);
          margin: 0;
        }
      }
      
      .benefits {
        h4 {
          color: var(--color-success);
          font-size: 1rem;
        }
        
        ul li {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
      }
    }

    .harmony-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .harmony-card {
      background: var(--bg-tertiary);
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid var(--border-light);
      text-align: center;
      
      h3 {
        color: var(--color-primary);
        margin-bottom: 1rem;
        font-weight: 600;
      }
      
      p {
        margin: 0.5rem 0;
        font-size: 0.875rem;
        
        strong {
          color: var(--text-primary);
        }
      }
    }

    .color-sample {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto 1rem auto;
      border: 3px solid var(--border-light);
    }

    .moca-sample {
      background: var(--meridian-moca);
    }

    .celeste-sample {
      background: var(--meridian-celeste);
    }

    .beige-sample {
      background: var(--meridian-beige);
    }

    .negro-sample {
      background: var(--meridian-negro);
    }

    .use-case {
      background: var(--bg-secondary);
      padding: 2rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      border: 1px solid var(--border-light);
      
      h3 {
        color: var(--color-primary);
        margin-bottom: 1rem;
        font-weight: 600;
      }
      
      p {
        color: var(--text-secondary);
        margin-top: 1rem;
        font-weight: 500;
      }
    }

    .demo-nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .nav-item {
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--text-secondary);
      background: var(--bg-tertiary);
      border: 1px solid var(--border-light);
      
      &.active {
        background: var(--color-primary);
        color: var(--text-inverse);
        font-weight: 600;
      }
    }

    .cards-demo {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .demo-card {
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--border-light);
      
      h4 {
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      
      p {
        margin: 0;
        font-size: 0.875rem;
      }
      
      &.primary {
        background: var(--color-primary-light);
        border-color: var(--color-primary);
        
        h4 {
          color: var(--color-primary-dark);
        }
      }
      
      &.secondary {
        background: var(--color-secondary-light);
        border-color: var(--color-secondary);
        
        h4 {
          color: var(--color-secondary-dark);
        }
      }
      
      &.neutral {
        background: var(--bg-tertiary);
        
        h4 {
          color: var(--text-primary);
        }
      }
    }

    .states-demo {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .state-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &.normal {
        background: var(--color-primary);
        color: var(--text-inverse);
      }
      
      &.hover {
        background: var(--color-primary-hover);
        color: var(--text-inverse);
        transform: translateY(-1px);
      }
      
      &.active {
        background: var(--color-primary-active);
        color: var(--text-inverse);
      }
      
      &.focus {
        background: var(--color-primary);
        color: var(--text-inverse);
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
    }

    .alerts-demo {
      display: grid;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .alert {
      padding: 0.75rem 1rem;
      border-radius: 6px;
      font-weight: 500;
      font-size: 0.875rem;
      
      &.success {
        background: color-mix(in srgb, var(--color-success) 10%, transparent);
        color: var(--color-success);
        border: 1px solid var(--color-success);
      }
      
      &.info {
        background: var(--bg-info);
        color: var(--color-info);
        border: 1px solid var(--color-info);
      }
      
      &.warning {
        background: color-mix(in srgb, var(--color-warning) 10%, transparent);
        color: var(--color-warning);
        border: 1px solid var(--color-warning);
      }
      
      &.error {
        background: color-mix(in srgb, var(--color-error) 10%, transparent);
        color: var(--color-error);
        border: 1px solid var(--color-error);
      }
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .metric-card {
      text-align: center;
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid var(--border-light);
      
      h3 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
      }
      
      p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
      }
      
      .badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
      }
      
      &.excellent {
        background: color-mix(in srgb, var(--color-success) 5%, transparent);
        
        h3 {
          color: var(--color-success);
        }
        
        .badge {
          background: var(--color-success);
        }
      }
      
      &.good {
        background: var(--bg-secondary);
        
        h3 {
          color: var(--color-primary);
        }
        
        .badge {
          background: var(--color-primary);
        }
      }
    }

    .recommendations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .recommendation-card {
      background: var(--bg-tertiary);
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid var(--border-light);
      
      h3 {
        color: var(--color-primary);
        margin-bottom: 1rem;
        font-weight: 600;
      }
      
      p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
        line-height: 1.5;
      }
      
      code {
        background: var(--bg-primary);
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
        display: block;
        border: 1px solid var(--border-light);
        color: var(--color-primary);
      }
    }

    @media (max-width: 768px) {
      .ux-demo-container {
        padding: 1rem;
      }
      
      .comparison-grid {
        grid-template-columns: 1fr;
      }
      
      .harmony-grid {
        grid-template-columns: 1fr;
      }
      
      .states-demo {
        flex-direction: column;
      }
      
      .demo-nav {
        flex-wrap: wrap;
      }
    }
  `]
})
export class UxUiDemoComponent {}