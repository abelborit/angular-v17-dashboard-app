import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      /* withViewTransitions() para que haya animación al cambiar entre pantallas */
      withViewTransitions({
        /* skipInitialTransition: true, es una opción para que no tenga una primera animación al cargar la página */
        skipInitialTransition: true,
        onViewTransitionCreated(transitionInfo) {
          /* transitionInfo para tener información de la transición, a qué ruta vamos, de qué ruta venimos, si ya terminó la transición, etc */
          console.log({ transitionInfo });
        },
      })
    ),
    /* aquí colocaremos todos los providers que usualmente importaríamos de la manera tradicional en los módulos */
    importProvidersFrom(HttpClientModule),
  ],
};

/* ************************************************************************************************************************ */
/* el view transition es para que por ejemplo, si estamos navegando entre pantallas entonces al pasar entra pantalla y pantalla se le diga al navegador web que anime esa transición y que lo haga de una forma en particular con alguna animación. Para eso vamos a importar un nuevo provider en el app.config.ts y colocaremos withViewTransitions() y con solo eso ya tendremos la animación entre rutas */
