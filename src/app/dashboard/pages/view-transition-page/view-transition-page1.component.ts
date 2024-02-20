import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-page1',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1" />
    <section class="flex justify-start">
      <!-- en el view-transition-name le colocaremos un nombre identificador único, en este caso hero1 y luego en el componente que tenga el mismo elemento le colocaremos lo el mismo nombre identificador único para que se haga esa animación. Tener en consideración que esta animación no está soportada aún en todos los navegadores hoy 20/02/2024 -->
      <img
        srcset="https://picsum.photos/id/2/200/300"
        alt="Picsum Image"
        width="250"
        height="350"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransitionPage1Component {}
