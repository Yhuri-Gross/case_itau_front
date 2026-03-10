export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
  saldo: number;
  role?: string;
}