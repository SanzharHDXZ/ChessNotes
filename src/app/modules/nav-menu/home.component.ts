import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayAgainstComputerDialogComponent } from '../play-against-computer-dialog/play-against-computer-dialog.component';
import { AuthDialogComponent } from './auth-dialog.component';
import { ChessUsernameDialogComponent } from './chesscom-username-dialog';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <section class="hero">
        <h1>Welcome to ChessNotes</h1>
        <p>Are you ready to play against the 16th world champion Magnus Carlsen?</p>
        <button class="cta-button" (click)="startPlaying()">Start Playing</button>
      </section>

      <section class="features">
        <div class="feature-card">
          <i class="fas fa-chess"></i>
          <h3>Play Online</h3>
          <p>Challenge with anyone from anywhere</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-comments"></i>
          <h3>Live Chat</h3>
          <p>Shout out to your AI-clone</p>
        </div>

        <div class="feature-card">
          <i class="fas fa-chart-line"></i>
          <h3>Interface</h3>
          <p>Enjoy the beautiful design of our app</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
.home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .hero {
      text-align: center;
      padding: 4rem 0;
      background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                  url('/assets/images/chess-bg.webp');
      background-size: cover;
      border-radius: 12px;
      color: white;
      margin-bottom: 3rem;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #e0e0e0;
    }

    .cta-button {
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .cta-button:hover {
      background: #0056b3;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 2rem 0;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .feature-card i {
      font-size: 2.5rem;
      color: #007bff;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .feature-card p {
      color: #666;
    }
  `]
})
export class HomeComponent {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  startPlaying(): void {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(AuthDialogComponent, {
        width: '400px',
        data: { isLogin: true }
      });
      return;
    }

    const dialogRef = this.dialog.open(ChessUsernameDialogComponent, {
      width: '400px',
      data: { opponent: 'computer', stockfishStrength: 1 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(PlayAgainstComputerDialogComponent, {
          data: { 
            chessUsername: result.username, 
            stockfishStrength: 1 
          }
        });
      }
    });
  }
}