import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  templateUrl: './cliente-form.component.html',
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ClienteFormComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    senha: '',
    saldo: 0
  };

  erro = '';

  constructor(
    private service: ClienteService,
    private authService: AuthService,
    private router: Router
  ) {}

  salvar() {
    this.erro = '';

    this.service.criar(this.cliente).subscribe({
      next: () => {
        this.authService.login({
          email: this.cliente.email,
          senha: this.cliente.senha!
        }).subscribe({
          next: (res) => {
            this.authService.salvarToken(res.token);
            this.router.navigate(['/minha-conta']);
          },
          error: () => {
            this.router.navigate(['/login']);
          }
        });
      },
      error: (err) => {
        this.erro = err?.error?.message || 'Erro ao cadastrar cliente';
      }
    });
  }
}