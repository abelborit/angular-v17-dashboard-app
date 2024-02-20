import { Routes } from '@angular/router';

/* LoadChildren para Angular 17 (sin modulos = standalone): https://angular.io/guide/standalone-components#lazy-loading-many-routes-at-once */
export const routes: Routes = [
  {
    path: 'dashboard',
    /* FORMA 1: como promesa y ya no sería necesaria la exportación por defecto del componente */
    // loadComponent: () =>
    //   import('./dashboard/dashboard.component').then(
    //     (component) => component.DashboardComponent
    //   ),
    /* FORAM 2: exportación por defecto del componente y ya no sería necesario usar promesas */
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection-page/change-detection-page.component'
          ),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import(
            './dashboard/pages/control-flow-page/control-flow-page.component'
          ),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import(
            './dashboard/pages/defer-options-page/defer-options-page.component'
          ),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import(
            './dashboard/pages/defer-views-page/defer-views-page.component'
          ),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () =>
          import('./dashboard/pages/user-page/user-page.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () =>
          import('./dashboard/pages/users-page/users-page.component'),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition 1',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition-page/view-transition-page1.component'
          ),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition-page/view-transition-page2.component'
          ),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
