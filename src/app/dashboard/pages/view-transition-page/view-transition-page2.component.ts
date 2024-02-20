import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-page2',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/2/200/300"
        alt="Picsum Image"
        width="200"
        height="300"
        class="rounded-2xl"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-800 w-40 h-40 rounded-2xl"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransitionPage2Component {}
