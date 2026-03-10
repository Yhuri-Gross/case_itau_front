export interface Login {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  id: number;
  nome: string;
  email: string;
  role: string;
}