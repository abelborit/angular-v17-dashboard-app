import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* como son interfaces entonces aquí se coloca type para que no haga ningún tipo de transpilación ni importación */
/* El import type es una característica de TypeScript que permite importar solo declaraciones para ser utilizadas en anotaciones y declaraciones de tipo. Esto significa que import type solo importa lo que necesita para los tipos, y no incluye ninguna implementación de JavaScript que pueda estar asociada con esos tipos. Como resultado, se borra completamente en el tiempo de ejecución, por lo que no queda ningún rastro de él y como resultado mejora el rendimiento */
import type {
  User,
  UserResponse,
  UsersResponse,
} from '@interfaces/users-response.interface';
import { Observable, delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

/* es bien conveniente trabajar con señales para manejar el estado pero RxJS para manejar las peticiones HTTP */
@Injectable({ providedIn: 'root' })
export class UsersService {
  private httpClient = inject(HttpClient);

  /* utilizar el # hace que este state o esta propiedad sea privada y sea interna a nuestro servicio pero ¿Cuál es la diferencia de utilizar el private o el #? Al usar el private hará que cuando se transpile de TypeScript a JavaScript se cree una clase que tiene la propiedad state y nosotros al estar en JavaScript podremos tener acceso a ella incluso si se le dice a TypeScript que no se puede usando el private pero al usar # ya lo hace privado en el ECMA Script y no se va a ejecutar entonces es ideal colocarle el # */
  #state = signal<State>({
    users: [],
    loading: true,
  });

  /* se usarán las señales computadas para poder mostrar el #state al exterior ya que está como privado de este servicio y esa señal computada es de solo lectura, es decir, no se va a poder cambiar ni de forma accidental */
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1000)) // para simular el tiempo de la respuesta de la API
      .subscribe((response) => {
        this.#state.set({
          loading: false,
          users: response.data,
        });
      });
  }

  getUserById(userId: string): Observable<User> {
    return this.httpClient
      .get<UserResponse>(`https://reqres.in/api/users/${userId}`)
      .pipe(
        delay(1000),
        map((response) => response.data)
      );
  }
}
