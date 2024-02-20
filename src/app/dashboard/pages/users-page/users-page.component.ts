import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TitleComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export default class UsersPageComponent {
  private usersService = inject(UsersService);

  /* aquí se hará una señal computada del servicio ya que está como privado y en el HTML no hay forma de acceder al servicio de forma directa muy aparte que se recomienda que los servicios se mantenga privados para poder encapsular su lógica y evitar cualquier tipo de manipulación accidental */
  public usersServiceComputed = computed(() => this.usersService);
}
