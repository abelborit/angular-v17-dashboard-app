import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  /* el .flat() de los arreglos retorna un nuevo arreglo con todos los elementos de los sub-arreglos que tiene y de forma recursiva hasta la profundidad especificada */
  /* se usa el filter ya que en el flat() está tomando el { path: '', redirectTo: '/dashboard', pathMatch: 'full' } y en este caso no lo vamos a utilizar entonces por eso se filtra solo a las rutas que tengan un path que sea de valor truthy y con eso tenemos todas las rutas que están definidas */
  /* el otro filter() es para quitar la ruta que tenga parámetros ya que ahora no queremos que forma parte de nuestro menú */
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
}
