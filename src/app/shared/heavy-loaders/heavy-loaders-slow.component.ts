import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: ` <section [ngClass]="['w-full h-[600px]', cssClass]">
    <h1>Heavy Loaders Slow Component</h1>
  </section>`,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  /* este será un componente pesado y bloqueante cosa que NO se debería hacer de esta forma, solo se hará para fines de práctica y ver las funcionalidades de los @defer en defer-views-page.component */
  constructor() {
    console.log('Heavy Loaders Slow Component - Cargando... ❌');
    const start = Date.now();

    /* este es un código que bloquea todo */
    while (Date.now() - start < 3000) {}
    console.log('Heavy Loaders Slow Component - Cargado ✅');
  }
}
