# Angular & TypeScript - Angular V17 Dashboard App

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

Esta sección está dedicada a explorar nuevas funcionalidades en Angular, puntualmente veremos:

- Señales
  - Observables a señales
  - Señales para estados en servicios
  - Señales de solo lectura (asReadOnly)
  - Señales computadas
- Defer
  - Funcionalidad
  - Triggers
- Control Flow
  - @if
  - @for
  - @else
  - @empty
  - @switch
  - @case
  - @default
- View Transition API (Aún no es compatible con todos los navegadores)
- Nuevo sistema de detección de cambios
- Tailwind con Angular
- Configuración de Path alias en TypeScript

### \* PASOS A REALIZAR:

1. ejemplo
2. ejemplo
3. ejemplo

### \* RECURSOS A USAR:

- Tailwind CSS: https://tailwindcss.com/ - https://tailwindcss.com/docs/guides/angular
- ejemplo
- ejemplo

### \* NOTAS:

- Al crear el proyecto con la versión 17 de Angular, iremos a src/app y veremos que la estructura de carpetas ha variado, por ejemplo, ya no está el app.module.ts, es decir, no está el módulo principal pero si vamos al app.config.ts veremos que es un archivo que tiene la configuración global de nuestra aplicación de Angular que nos va a permitir hacer inyección de módulos u otros proveedores para poder tener el mismo comportamiento que tuvimos con Angular v15, v16, etc. Entonces, por ejemplo, si queremos usar HttpClient entonces tenemos que usar el HttpClientModulo y como es algo que se usará de forma global en la aplicación, entonces necesitamos importar el módulo en nuestro app.config.ts y darse cuenta que si vamos al main.ts estamos haciendo uso de este app.config.ts al hacer el bootstrap de nuestra aplicación. Otro cambio también es que el app.component.ts es el mismo que antes pero ahora tiene una nueva opción con el `standalone: true,` y al crear un nuevo componente en esta v17 de Angular todo será standalone por defecto. Otro cambio es que genera por defecto el app.routes.ts para manejar las rutas y esas rutas también están definidas en app.config.ts en `provideRouter(routes)`
- ejemplo
- ejemplo

---

# AngularV17DashboardApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
