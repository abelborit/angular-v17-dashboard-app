import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  /* por defecto está como changeDetection: ChangeDetectionStrategy.Default que es la forma en como Angular trabaja como se explicó abajo en el comentario con la propiedad normal pero ahora lo colocaremos con changeDetection: ChangeDetectionStrategy.OnPush que quiere decir que está pendiente de menos ciclos de vida o menos puntos de cambio en nuestra aplicación */
  /* la recomendación general es usar ChangeDetectionStrategy.OnPush acompañado de señales. Esto se debe a que OnPush mejora el rendimiento de la aplicación al reducir la cantidad de veces que Angular necesita verificar si hay cambios en los componentes. */
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="Change Detection" />
    <hr class="my-4 border-cyan-600" />
    <h3 class="text-xl">Current Framework: {{ currentFramework() }}</h3>
    <hr class="my-4 border-cyan-600" />
    <pre>{{ frameworksAsSignals() | json }}</pre>
    <hr class="my-4 border-cyan-600" />
    <pre>{{ frameworksAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionPageComponent {
  public currentFramework = computed(
    () => `${this.frameworksAsSignals().name}`
  );

  public frameworksAsSignals = signal({
    type: 'frameworks As Signals',
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworksAsProperty = {
    type: 'frameworks As Property',
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      /* esta es la forma tradicional como trabaja Angular porque tiene una librería internar llamada ZoneJS que se encarga de que el framework, en este caso Angular, esté pendiente de los cambios que suceden en cualquier parte en el tiempo y se encarga de mantenerlos en sincronía. Al trabajarlo así Angular está entrando poco a poco a ser zoneless, es decir, que está pendiente de los cambios y sincronía para realizar el cambio pero con el tiempo los desarrolladores de Angular están más enfocados a que Angular esté menos pendiente de ese estado de la sincronía y que con las señales o signals o ciertas etapas del ciclo de vida que le digan a Angular cuándo tiene que hacer esa verificación en lugar de estar pendiente todo el tiempo de que de cualquier lugar venga un cambio */
      /* al colocar changeDetection: ChangeDetectionStrategy.OnPush, veremos que este cambio no se realiza porque ahora sería mejor trabajar con las señales para que estas señales puedan estar pendiente de su propiedad en específico lo cual mejora enormemente el rendimiento de la aplicación. Pero al colocar ambas líneas de código para cambiar el name veremos que frameworksAsSignals y frameworksAsProperty en su propiedad name cambia lo cual puede ser un efecto secundario al mandarlo a llamar ambas formas juntas pero hay que tener en cuenta que es mejor trabajar con las señales */
      // this.frameworksAsProperty.name = 'React';

      this.frameworksAsSignals.update((currentValue) => ({
        ...currentValue,
        name: 'React',
      }));

      console.log('Cambio realizado!');
    }, 3000);
  }
}

/* ************************************************************************************************************************ */
/* ¿Es recomendable usar signals para todos los estados de la aplicacion? */
/*
En general, sí, es recomendable usar signals para todos los estados de la aplicación. Los signals tienen varias ventajas sobre las variables tradicionales:
  - Son más eficientes en términos de rendimiento. Las variables tradicionales se actualizan de forma automática cada vez que se modifica su valor, incluso si la modificación no afecta a la vista. Los signals, por otro lado, solo se actualizan cuando se emite un evento. Esto puede suponer una mejora significativa del rendimiento en aplicaciones con muchos estados.
  - Facilitan la programación reactiva. Los signals son compatibles con el patrón de diseño observador, que es la base de la programación reactiva. Esto hace que sea más fácil escribir código que reaccione a cambios en el estado de la aplicación.

Sin embargo, hay algunas situaciones en las que es posible que no sea recomendable usar signals:
  - Cuando el estado es simple y no necesita ser observado por muchas vistas. En este caso, puede ser más eficiente usar una variable tradicional.
  - Cuando el estado se modifica con frecuencia y se necesita que la vista se actualice inmediatamente. En este caso, puede ser mejor usar una variable tradicional con el modo OnPush.

En cuanto a la pregunta específica sobre el rendimiento, la respuesta es sí, usar signals puede mejorar el rendimiento de la aplicación. Esto se debe a que las variables tradicionales se actualizan de forma automática cada vez que se modifica su valor, incluso si la modificación no afecta a la vista. Los signals, por otro lado, solo se actualizan cuando se emite un evento. Esto puede suponer una mejora significativa del rendimiento en aplicaciones con muchos estados, especialmente en aplicaciones móviles.
*/
