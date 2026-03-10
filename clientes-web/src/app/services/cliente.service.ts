import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private api = 'http://localhost:5000/clientes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.api);
  }

  buscarPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.api}/${id}`);
  }

  buscarMeuPerfil(): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.api}/me`);
  }

  criar(cliente: Cliente) {
    return this.http.post(this.api, cliente);
  }

  deletar(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  depositar(id: number, valor: number) {
    return this.http.post(`${this.api}/${id}/depositar`, { valor });
  }

  sacar(id: number, valor: number) {
    return this.http.post(`${this.api}/${id}/sacar`, { valor });
  }
}