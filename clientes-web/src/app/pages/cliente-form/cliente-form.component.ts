import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  templateUrl: './cliente-form.component.html',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteFormComponent {

  cliente: Cliente = {
    nome: '',
    email: '',
    saldo: 0
  };

  constructor(
    private service: ClienteService,
    private router: Router
  ) {}

  salvar() {
    this.cliente.saldo = 0;
    this.service.criar(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }
}