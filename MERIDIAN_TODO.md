# 📋 TODO LIST - Replicar meridianprojects.co en Angular

## 🎯 OBJETIVO
Replicar completamente la página web meridianprojects.co usando Angular 18+ con Standalone Components y arquitectura limpia.

---

## ✅ FASE 1: SETUP Y CONFIGURACIÓN INICIAL _(COMPLETADA)_

### 1.1 Estructura del Proyecto ✅
- [x] ✅ **Verificar estructura actual** _(Completado)_
- [x] **Configurar routing para páginas principales**
  - [x] Home (/)
  - [x] Proyectos (/proyectos)  
  - [x] Servicios (/servicios)
  - [x] Contacto (/contacto)
- [x] **Configurar lazy loading para todas las rutas**

### 1.2 Dependencias y Bibliotecas ✅
- [x] **Instalar Angular Material** (v18 compatible)
- [x] **Instalar Angular CDK** (v18 compatible)
- [x] **Angular Animations** _(Ya estaba instalado)_
- [x] **Angular Forms** _(Ya estaba instalado)_
- [x] **Instalar Swiper** (para carousel/slider)
- [x] **Configurar SCSS variables** (colores, tipografías basados en Meridian)

### 1.3 Assets y Recursos ✅
- [x] **Crear carpeta de assets organizadas**:
  - [x] `/images/hero/`
  - [x] `/images/gallery/` 
  - [x] `/images/projects/`
  - [x] `/images/testimonials/`
  - [x] `/icons/social/`
  - [x] `/videos/`
- [ ] **Descargar/crear imágenes similares** (Unsplash/Pexels) _(Fase 2)_
- [ ] **Crear logo de placeholder** _(Fase 2)_
- [ ] **Conseguir video para hero background** _(Fase 2)_

### 1.4 Configuración SCSS ✅
- [x] **Variables SCSS** (colores Meridian, tipografía, espaciados)
- [x] **Mixins SCSS** (botones, cards, responsive, animaciones)
- [x] **Importación global** en styles.scss

---

## ✅ FASE 2: COMPONENTES COMPARTIDOS (SHARED)

### 2.1 Layout Components
- [ ] **Header Component**
  - [ ] Logo clickeable
  - [ ] Navegación responsive
  - [ ] Menu hamburguesa mobile
  - [ ] Active link highlighting
  
- [ ] **Footer Component**
  - [ ] Información de contacto
  - [ ] Enlaces de redes sociales
  - [ ] Newsletter subscription
  - [ ] Copyright

- [ ] **WhatsApp Float Button Component**
  - [ ] Botón flotante posición fixed
  - [ ] Link a WhatsApp con mensaje predefinido
  - [ ] Hover effects

### 2.2 UI Components Reutilizables
- [ ] **Button Component**
  - [ ] Variantes: primary, secondary, outline
  - [ ] Tamaños: small, medium, large
  - [ ] Loading states
  
- [ ] **Card Component**
  - [ ] Project cards
  - [ ] Service cards
  - [ ] Testimonial cards
  
- [ ] **Image Gallery Component**
  - [ ] Grid layout responsive
  - [ ] Lightbox functionality
  - [ ] Lazy loading
  
- [ ] **Carousel Component**
  - [ ] Navigation arrows
  - [ ] Dots indicators
  - [ ] Touch/swipe support
  - [ ] Auto-play opcional

### 2.3 Form Components
- [ ] **Input Component**
  - [ ] Text, email, textarea variants
  - [ ] Validation states
  - [ ] Floating labels
  
- [ ] **Form Wrapper Component**
  - [ ] Validation integration
  - [ ] Error handling
  - [ ] Loading states

---

## ✅ FASE 3: PÁGINAS PRINCIPALES

### 3.1 Home Page Component
- [ ] **Hero Section**
  - [ ] Video background implementation
  - [ ] Overlay text content
  - [ ] CTA button "Descubre"
  - [ ] Star rating display
  
- [ ] **Sobre Nosotros Section**
  - [ ] Texto descriptivo
  - [ ] Imagen de silla amarilla
  - [ ] CTA button "Descubre"
  
- [ ] **Diseño Personalizado Section**
  - [ ] Grid layout para subsecciones
  - [ ] "Proyectos Únicos" subsection
  - [ ] "Calidad y Estilo" subsection
  - [ ] Múltiples imágenes de interiores
  
- [ ] **Galería Inspiradora Section**
  - [ ] Grid de 4 imágenes
  - [ ] Responsive layout
  - [ ] Hover effects
  
- [ ] **Testimonios Section**
  - [ ] Testimonio de Carlos Zuluaga
  - [ ] Star rating
  - [ ] Imágenes de proyectos
  
- [ ] **Carousel Section**
  - [ ] Implementar Swiper
  - [ ] Navigation buttons
  - [ ] Pagination dots

### 3.2 Proyectos Page Component
- [ ] **Hero Section**
  - [ ] Título "Proyectos Únicos"
  - [ ] Descripción de servicios
  
- [ ] **Diseño Personalizado Section**
  - [ ] Marco rectangular en pared
  - [ ] CTA "Ver"
  
- [ ] **Estilo Moderno Section**
  - [ ] Silla verde
  - [ ] Elementos adicionales (plantas, laptop)
  - [ ] CTA "Explorar"
  
- [ ] **Galería Proyectos Section**
  - [ ] Grid de 4 imágenes específicas
  - [ ] Responsive design
  
- [ ] **Reutilizar Testimonio Section**

### 3.3 Servicios Page Component
- [ ] **Hero Section**
  - [ ] Título "Diseño de Interiores"
  - [ ] Descripción de transformación
  
- [ ] **Proyectos Personalizados Section**
  - [ ] Imágenes: bicicletas, gabinete, mesa
  - [ ] Descripción de unicidad
  
- [ ] **Estética Minimalista Section**
  - [ ] Información sobre paletas
  - [ ] Materiales de calidad
  
- [ ] **Diseño con Identidad Section**
  - [ ] Imagen de cocina blanca
  - [ ] Subsecciones diferenciadas
  
- [ ] **Opiniones Clientes Section**
  - [ ] Ana Pérez (Medellín)
  - [ ] Luis Gómez (Bogotá)  
  - [ ] Star ratings

### 3.4 Contacto Page Component
- [ ] **Hero Section**
  - [ ] Título de contacto
  - [ ] Descripción motivacional
  
- [ ] **Info de Contacto Section**
  - [ ] Teléfono con icono
  - [ ] Email con icono
  
- [ ] **Formulario de Contacto**
  - [ ] Campo nombre
  - [ ] Campo email (requerido)
  - [ ] Campo mensaje (requerido)
  - [ ] Validación reactive forms
  - [ ] Submit handling
  
- [ ] **Ubicación Section**
  - [ ] Google Maps iframe
  - [ ] Dirección física
  - [ ] Horarios de atención
  
- [ ] **Filosofía Diseño Section**
  - [ ] Imágenes específicas
  - [ ] Texto descriptivo

---

## ✅ FASE 4: SERVICIOS Y FUNCIONALIDADES

### 4.1 Services (Angular Services)
- [ ] **Navigation Service**
  - [ ] Smooth scroll to sections
  - [ ] Active route tracking
  
- [ ] **Contact Service**
  - [ ] Form submission handling
  - [ ] Email integration (opcional)
  - [ ] Validation logic
  
- [ ] **Image Service**
  - [ ] Lazy loading implementation
  - [ ] Image optimization
  - [ ] Placeholder handling
  
- [ ] **Analytics Service** (opcional)
  - [ ] Page view tracking
  - [ ] Event tracking
  - [ ] Google Analytics integration

### 4.2 Pipes
- [ ] **Safe HTML Pipe** (si necesario)
- [ ] **Image Lazy Load Pipe**
- [ ] **Phone Format Pipe**

### 4.3 Directives
- [ ] **Intersection Observer Directive**
  - [ ] Animations on scroll
  - [ ] Lazy loading trigger
- [ ] **Click Outside Directive** (para menús)

---

## ✅ FASE 5: ESTILOS Y DISEÑO

### 5.1 SCSS Architecture
- [ ] **Variables SCSS**
  - [ ] Colores primarios/secundarios
  - [ ] Tipografías (Roboto equivalente)
  - [ ] Breakpoints responsive
  - [ ] Espaciados/margins
  
- [ ] **Mixins SCSS**
  - [ ] Button styles
  - [ ] Card styles  
  - [ ] Responsive breakpoints
  - [ ] Animations/transitions
  
- [ ] **Base Styles**
  - [ ] Reset/normalize
  - [ ] Typography base
  - [ ] Global classes

### 5.2 Responsive Design
- [ ] **Mobile First Approach**
- [ ] **Tablet Breakpoint** (768px)
- [ ] **Desktop Breakpoint** (1024px)
- [ ] **Large Desktop** (1440px+)

### 5.3 Animations
- [ ] **Scroll Animations**
  - [ ] Fade in on scroll
  - [ ] Slide up animations
  - [ ] Stagger animations
  
- [ ] **Hover Effects**
  - [ ] Button hover states
  - [ ] Image hover effects
  - [ ] Link transitions
  
- [ ] **Page Transitions**
  - [ ] Route change animations
  - [ ] Loading states

---

## ✅ FASE 6: OPTIMIZACIÓN Y PERFORMANCE

### 6.1 Performance
- [ ] **Lazy Loading**
  - [ ] Route lazy loading ✅ _(configurado)_
  - [ ] Image lazy loading
  - [ ] Component lazy loading
  
- [ ] **Bundle Optimization**
  - [ ] Tree shaking verification
  - [ ] Code splitting
  - [ ] Minification
  
- [ ] **Image Optimization**
  - [ ] WebP format support
  - [ ] Responsive images
  - [ ] Proper sizing

### 6.2 SEO
- [ ] **Meta Tags**
  - [ ] Title tags por página
  - [ ] Meta descriptions
  - [ ] Open Graph tags
  
- [ ] **Structured Data**
  - [ ] JSON-LD para negocio local
  - [ ] Service schema
  - [ ] Review schema
  
- [ ] **Sitemap Generation**
- [ ] **Robots.txt**

### 6.3 Accessibility
- [ ] **WCAG 2.1 Compliance**
  - [ ] Alt text para imágenes
  - [ ] Keyboard navigation
  - [ ] ARIA labels
  - [ ] Color contrast validation
  
- [ ] **Screen Reader Support**
- [ ] **Focus Management**

---

## ✅ FASE 7: INTEGRACIÓNES EXTERNAS

### 7.1 WhatsApp Integration
- [ ] **Botón flotante funcional**
- [ ] **Mensaje predefinido personalizable**
- [ ] **Números de teléfono configurables**

### 7.2 Google Maps
- [ ] **Iframe implementation**
- [ ] **Fallback para errores de carga**
- [ ] **Responsive maps**

### 7.3 Social Media
- [ ] **Enlaces a redes sociales**
- [ ] **Open Graph integration**
- [ ] **Share buttons** (opcional)

### 7.4 Email/Forms
- [ ] **EmailJS integration** (sin backend)
- [ ] **Form validation**
- [ ] **Success/error handling**

---

## ✅ FASE 8: TESTING Y QUALITY ASSURANCE

### 8.1 Unit Testing
- [ ] **Component tests**
- [ ] **Service tests**  
- [ ] **Pipe tests**
- [ ] **Directive tests**

### 8.2 E2E Testing
- [ ] **Navigation flow**
- [ ] **Form submissions**
- [ ] **Responsive behavior**
- [ ] **Cross-browser testing**

### 8.3 Performance Testing
- [ ] **Lighthouse audit**
- [ ] **Core Web Vitals**
- [ ] **Load time optimization**

---

## ✅ FASE 9: DEPLOYMENT Y PRODUCTION

### 9.1 Build Configuration
- [ ] **Production build optimization**
- [ ] **Environment configurations**
- [ ] **CDN configuration** (opcional)

### 9.2 Hosting Setup
- [ ] **Netlify/Vercel deployment** (recomendado)
- [ ] **Custom domain configuration**
- [ ] **SSL certificate**
- [ ] **Redirect rules** (SPA routing)

### 9.3 Monitoring
- [ ] **Google Analytics**
- [ ] **Error tracking** (Sentry opcional)
- [ ] **Performance monitoring**

---

## 📊 PRIORIZACIÓN DE TAREAS

### 🔥 **ALTA PRIORIDAD** (Semana 1-2)
1. Configurar routing y estructura básica
2. Crear componentes de layout (Header/Footer)
3. Implementar Home page completa
4. Configurar estilos base y responsive

### 🟡 **MEDIA PRIORIDAD** (Semana 3-4)
1. Completar páginas Proyectos, Servicios, Contacto
2. Implementar carousel y galleries
3. Integrar WhatsApp y formularios
4. Añadir animations y transitions

### 🔵 **BAJA PRIORIDAD** (Semana 5+)
1. Optimizaciones de performance
2. SEO y accessibility
3. Testing comprehensivo
4. Deployment y monitoring

---

## 🎯 CRITERIOS DE ÉXITO

### Funcionalidad
- [ ] **100% de páginas replicadas** visualmente
- [ ] **Navegación fluida** entre secciones
- [ ] **Formularios funcionales**
- [ ] **Responsive en todos los dispositivos**

### Performance
- [ ] **Lighthouse Score 90+**
- [ ] **Load time < 3s**
- [ ] **First Contentful Paint < 1.5s**

### Calidad
- [ ] **Zero console errors**
- [ ] **Accessibility compliant**
- [ ] **Cross-browser compatible**

---

## 🛠️ HERRAMIENTAS RECOMENDADAS

### Development
- **Angular DevTools**
- **Lighthouse DevTools**
- **Redux DevTools** (si se usa NgRx)

### Design
- **Figma** (para diseño de referencia)
- **ColorZilla** (para extraer colores)
- **WhatFont** (para identificar tipografías)

### Testing
- **Cypress** (E2E testing)
- **Jest** (Unit testing)
- **Storybook** (Component documentation)

### Deployment
- **Netlify** o **Vercel** (hosting)
- **GitHub Actions** (CI/CD)