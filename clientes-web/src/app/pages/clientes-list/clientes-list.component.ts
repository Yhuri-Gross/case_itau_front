import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

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

  constructor(private service: ClienteService,
      private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.service.listar().subscribe({
      next: (res) => {
        console.log('clientes recebidos', res);

        this.clientes = [...res];

        this.cdr.detectChanges(); // força atualização segura
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deletar(id: number) {
    console.log("clicou deletar");

    this.service.deletar(id).subscribe({

      next: () => {
        console.log("deletou");

        this.carregar();
      },
      error: (err) => {
        console.error('Erro ao deletar', err);
      }
    });
  }

  depositar(id: number) {
    const valor = Number(prompt("Valor para depósito"));
    if (!valor) return;

    this.service.depositar(id, valor).subscribe({
      next: () => {
        this.carregar();
      },
      error: (err) => {
        console.error('Erro ao depositar', err);
      }
    });
  }

  sacar(id: number) {
    const valor = Number(prompt("Valor para saque"));
    if (!valor) return;

    this.service.sacar(id, valor).subscribe({
      next: () => {
        this.carregar();
      },
      error: (err) => {
        console.error('Erro ao sacar', err);
      }
    });
  }

}