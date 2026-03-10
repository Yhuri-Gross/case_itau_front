import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css',
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    CurrencyPipe
  ]
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'saldo', 'acoes'];
  isAdmin = false;

  constructor(
    private service: ClienteService,
    public authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.isAdmin = this.authService.isAdmin();
    this.carregar();
  }

  carregar(): void {
    if (this.isAdmin) {
      this.service.listar().subscribe({
        next: (res) => {
          this.clientes = [...res];
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.service.buscarMeuPerfil().subscribe({
        next: (res) => {
          this.clientes = [res];
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    }
  }

  deletar(id?: number) {
    if (!id) return;

    this.service.deletar(id).subscribe({
      next: () => this.carregar(),
      error: (err) => console.error('Erro ao deletar', err)
    });
  }

  depositar(id?: number) {
    if (!id) return;

    const valor = Number(prompt('Valor para depósito'));
    if (!valor) return;

    this.service.depositar(id, valor).subscribe({
      next: () => this.carregar(),
      error: (err) => console.error('Erro ao depositar', err)
    });
  }

  sacar(id?: number) {
    if (!id) return;

    const valor = Number(prompt('Valor para saque'));
    if (!valor) return;

    this.service.sacar(id, valor).subscribe({
      next: () => this.carregar(),
      error: (err) => console.error('Erro ao sacar', err)
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}