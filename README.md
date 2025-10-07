# Nueva Page SPA

Un proyecto Angular SPA moderno con arquitectura limpia, utilizando componentes standalone y las mejores prácticas actuales.

## 🚀 Características

- **Componentes Standalone**: Aprovecha la nueva API de componentes standalone de Angular
- **Arquitectura Limpia**: Estructura organizada con separación clara de responsabilidades
- **Lazy Loading**: Carga diferida de componentes para optimizar el rendimiento
- **TypeScript Strict**: Configuración estricta para mayor seguridad de tipos
- **SCSS**: Preprocesador CSS para estilos más potentes
- **Sin archivos basura**: Estructura minimalista y enfocada

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/           # Servicios principales y guards
│   ├── shared/         # Componentes, pipes y directivas compartidas
│   ├── features/       # Módulos de características (lazy-loaded)
│   │   └── home/       # Página de inicio
│   ├── app.component.ts
│   ├── app.config.ts   # Configuración de la aplicación
│   └── app.routes.ts   # Definición de rutas
├── styles.scss         # Estilos globales
├── main.ts            # Punto de entrada con bootstrapApplication
└── index.html
```

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm start
```

3. Compilar para producción:
```bash
npm run build
```

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run watch` - Compila en modo watch para desarrollo
- `npm test` - Ejecuta las pruebas unitarias

## 🏗️ Principios de Arquitectura

Este proyecto sigue los principios de arquitectura limpia:

- **Separación de responsabilidades**
- **Independencia de frameworks**
- **Testabilidad**
- **Independencia de UI**
- **Independencia de base de datos**

## 🎯 Próximos Pasos

Para extender este proyecto, considera agregar:

- Gestión de estado (NgRx o Akita)
- Interceptores HTTP
- Guards de rutas
- Servicios de datos
- Testing (Jest)
- PWA capabilities

## 📄 Licencia

MIT