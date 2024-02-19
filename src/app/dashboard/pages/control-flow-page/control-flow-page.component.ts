import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow-page',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-page.component.html',
  styleUrl: './control-flow-page.component.css',
})
export default class ControlFlowPageComponent {
  public showContent = signal<boolean>(false);

  public toggleShowContent() {
    this.showContent.update((currentValue) => !currentValue);
  }
}
