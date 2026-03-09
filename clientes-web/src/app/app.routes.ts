import { Routes } from '@angular/router';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes/novo',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientesListComponent
  },
  {
    path: 'clientes/novo',
    component: ClienteFormComponent
  }
];