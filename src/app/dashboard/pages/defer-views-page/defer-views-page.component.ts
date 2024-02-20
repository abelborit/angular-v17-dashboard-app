import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views-page',
  standalone: true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views-page.component.html',
  styleUrl: './defer-views-page.component.css',
})
export default class DeferViewsPageComponent {}

/* ************************************************************************************************************************ */
/* los defer views o defer blocks o defer functions, tiene varios nombres pero son lo mismo, es un comportamiento que podemos añadir a los templates HTML para decirles cómo queremos que cargue el componente lo cual lleva al lazy load al siguiente nivel. Al usar los defer views es una forma de cargar el componente de manera diferida, es decir, de forma perezosa pero diferida, como si fuera una carga bajo demanda, es decir, hasta que se necesite recién carga */
