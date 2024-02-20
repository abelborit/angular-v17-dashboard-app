import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options-page',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options-page.component.html',
  styleUrl: './defer-options-page.component.css',
})
export default class DeferOptionsPageComponent {
  /* se colocó esto solo para simular que el botón se hizo click una vez y luego se deshabilitó ya que se mostró la información */
  public isDisabledBtn = signal<boolean>(false);

  disabledBtn() {
    this.isDisabledBtn.update(() => true);
  }
}
