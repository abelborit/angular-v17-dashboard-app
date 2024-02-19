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
  public grade = signal<'A' | 'C' | 'F'>('A');
  public frameworks = signal<string[]>([
    'Angular',
    'React',
    'Vue',
    'Qwik',
    'Svelt',
  ]);
  public frameworks2 = signal<string[]>([]);

  public toggleShowContent() {
    this.showContent.update((currentValue) => !currentValue);
  }

  public changeGrade(newGrade: 'A' | 'C' | 'F') {
    this.grade.update(() => newGrade);
  }
}
