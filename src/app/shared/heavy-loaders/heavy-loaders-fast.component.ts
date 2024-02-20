import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]">
    <!-- <h1>Heavy Loaders Fast Component</h1> -->

    <!-- con este <ng-content /> se convierte en un HOC (High Order Component) que desde el padre se pueden mandar los componentes hijos -->
    <ng-content />
  </section>`,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('Heavy Loaders Fast Component - Cargado ✅');
  }
}
