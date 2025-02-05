import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-header">
        <h2>{{ isLogin ? 'Welcome Back' : 'Create Account' }}</h2>
        <p class="subtitle">{{ isLogin ? 'Sign in to continue playing chess' : 'Join our chess community' }}</p>
      </div>
      
      <form (ngSubmit)="onSubmit()" class="auth-form">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <i class="fas fa-envelope"></i>
            <input 
              type="email" 
              id="email" 
              [(ngModel)]="email" 
              name="email" 
              placeholder="Enter your email"
              required>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <i class="fas fa-lock"></i>
            <input 
              type="password" 
              id="password" 
              [(ngModel)]="password" 
              name="password" 
              placeholder="Enter your password"
              required>
          </div>
        </div>

        <button type="submit" class="submit-button">
          {{ isLogin ? 'Sign In' : 'Create Account' }}
        </button>

        <div class="auth-footer">
          <span>{{ isLogin ? "Don't have an account?" : 'Already have an account?' }}</span>
          <button type="button" class="toggle-button" (click)="toggleMode()">
            {{ isLogin ? 'Sign Up' : 'Sign In' }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .auth-container {
      background: #1a1a1a;
      padding: 2rem;
      border-radius: 12px;
      min-width: 380px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }

    .auth-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .auth-header h2 {
      color: white;
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #888;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      color: #b0b0b0;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-wrapper i {
      position: absolute;
      left: 1rem;
      color: #666;
    }

    .input-wrapper input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      background: #2d2d2d;
      border: 1px solid #404040;
      border-radius: 8px;
      color: white;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .input-wrapper input:focus {
      border-color: #007bff;
      background: #333;
      outline: none;
    }

    .submit-button {
      width: 100%;
      padding: 0.875rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
      margin-bottom: 1.5rem;
    }

    .submit-button:hover {
      background: #0056b3;
    }

    .auth-footer {
      text-align: center;
      color: #888;
      font-size: 0.9rem;
    }

    .toggle-button {
      background: none;
      border: none;
      color: #007bff;
      font-size: 0.9rem;
      cursor: pointer;
      margin-left: 0.5rem;
    }

    .toggle-button:hover {
      text-decoration: underline;
    }
  `]
})
export class AuthDialogComponent {
  isLogin = true;
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<AuthDialogComponent>
  ) {}

  toggleMode(): void {
    this.isLogin = !this.isLogin;
  }
  
  onSubmit(): void {
    if (this.email && this.password) {
      if (this.isLogin) {
        const success = this.authService.login(this.email, this.password);
        if (success) {
          this.dialogRef.close(true);
        }
      } else {
        const success = this.authService.login(this.email, this.password);
        if (success) {
          this.dialogRef.close(true);
        }
      }
    }
  }
}
