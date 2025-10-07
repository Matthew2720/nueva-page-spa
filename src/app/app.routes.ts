import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./features/proyectos/proyectos.component').then(m => m.ProyectosComponent)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/servicios/servicios.component').then(m => m.ServiciosComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: 'image-optimizer',
    loadComponent: () => import('./features/image-optimizer/image-optimizer.component').then(m => m.ImageOptimizerComponent)
  },
  {
    path: 'colors',
    loadComponent: () => import('./shared/components/color-palette/color-palette.component').then(m => m.ColorPaletteComponent)
  },
  {
    path: 'ux-demo',
    loadComponent: () => import('./shared/components/ux-ui-demo/ux-ui-demo.component').then(m => m.UxUiDemoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];