import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* FORMA 1: sin alias en TypeScript */
// import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
/* FORMA 2: con alias en TypeScript */
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}
