import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl mb-5">{{ title }}</h1>
    <h3 class="text-xl">With attribute props: {{ withShadow }}</h3>
  `,
})
export class TitleComponent {
  /* aquí se puede colocar title!: string con el ! o sino title: string = "" que es inicializarlo con el string vacio. En este caso se coloca con ! ya que como se le está diciendo que es un campo requerido entonces sí o sí tiene que venir, pero también se puede inicialiar con un string vacío */
  @Input({ required: true }) title!: string;

  /* en este caso se está trabajando con transform y con booleanAttribute para que tenga una forma similar a la que trabaja con React cuando se le pasa un atributo, es decir, si está el atributo entonces significa que es un True y si no está entonces es un False. Trabajar de esta forma nos ayuda a evitar colocar todo el atributo con su valor, es decir, nos ahorra escribir [withShadow]=true o [withShadow]=false y ahora solo se coloca o no el atributo withShadow */
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
