import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form: Login = {
    email: '',
    senha: ''
  };

  erro = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  entrar() {
    this.erro = '';

    this.authService.login(this.form).subscribe({
      next: (res) => {
        this.authService.salvarToken(res.token);

        if (res.role === 'Admin') {
          this.router.navigate(['/clientes']);
        } else {
          this.router.navigate(['/minha-conta']);
        }
      },
      error: () => {
        this.erro = 'Email ou senha inválidos';
      }
    });
  }
}