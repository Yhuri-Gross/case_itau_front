import { Routes } from '@angular/router';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clientes',
    component: ClientesListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'minha-conta',
    component: ClientesListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'clientes/novo',
    component: ClienteFormComponent
  }
];