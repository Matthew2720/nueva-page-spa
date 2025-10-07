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
    path: '**',
    redirectTo: ''
  }
];