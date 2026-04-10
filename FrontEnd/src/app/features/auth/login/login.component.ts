import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  // DEFAULT ROLE 👇
  selectedRole: string = 'EMPLOYEE';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password, this.selectedRole)
      .subscribe((user) => {

        if (user.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/employee']);
        }

      }, () => {
        alert('Invalid credentials');
      });
  }
}