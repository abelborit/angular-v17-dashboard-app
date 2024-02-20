import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '@interfaces/users-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export default class UserPageComponent {
  /* aquí vamos a tomar el argumento que viene por la url pero si vemos en el console.log(this.route.params); veremos que es un observable y entonces eso significa que nos podemos suscribir. Pero nosotros queremos convertir un observable a una señal porque por mientras Angular trabaja fuertemente con los observables pero puede ser que en un futuro use plenamente las señales pero en este caso queremos usar las señales para poder optimizar el rendimiento aunque tranquilamente se podría seguir trabajando con los observables como la FORMA TRADICIONAL */
  /* hacer tests con inject: https://www.youtube.com/watch?v=Tvsa4OMUGXs&ab_channel=RainerHahnekamp */
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  /* tendremos una señal que manejará la información del usuario */
  /* el toSignal() es una función que nos permite tomar un observable y regresar una señal y cuando el observable emite entonces emite un nuevo cambio en la señal. Usaremos el switchMap() para aplanar el observable, es decir, tomará un observable que viene del this.route.params y luego el valor que emita lo usará para el nuevo observable del this.usersService.getUserById() */
  /* en general es una buena práctica desuscribirse de las suscripciones de RxJS cuando ya no se necesitan, para evitar fugas de memoria, sin embargo, en este código se está utilizando la función toSignal la cual convierte un Observable de RxJS en una señal reactiva y las señales reactivas se limpian automáticamente cuando ya no se utilizan, por lo que no se necesita desuscribirse manualmente. Sin embargo, si se está trabajando con Observables de RxJS directamente (sin convertirlos en señales), todavía se necesitaría desuscribirse manualmente. */
  public user = toSignal(
    this.route.params.pipe(
      switchMap((params) => this.usersService.getUserById(params['id']))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del Usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    }

    return 'Información del Usuario: Cargando...';
  });

  /* esto es solo para saber qué viene dentro de los params y confirmar que es un observable */
  // constructor() {
  //   console.log(this.route.params);
  //   this.route.params.subscribe((params) => {
  //     console.log({ params });
  //   });
  // }
}

/* ************************************************************************************************************************ */
/* FORMA TRADICIONAL: sin señales y sin inject() */
/*
export class UserPageComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.params.pipe(
      switchMap(params => this.usersService.getUserById(params['id']))
    );
  }
}
*/
