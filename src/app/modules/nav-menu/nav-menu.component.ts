import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { PlayAgainstComputerDialogComponent } from '../play-against-computer-dialog/play-against-computer-dialog.component';
import { PlayOptionsDialogComponent } from './play-options-dialog.component';
import { ChatComponent } from './chat.component';
import { AuthDialogComponent } from './auth-dialog.component';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ChessUsernameDialogComponent } from './chesscom-username-dialog';

@Component({
  selector: 'app-nav-menu',
  template: `
    <nav class="nav-wrapper">
      <div class="nav-content">
        <div class="logo-section">
          <img src="assets/images/chess-logo.webp" alt="ChessNote" class="logo">
          <span class="site-name" routerLink="/home">ChessNotes</span>
        </div>
        
        <div class="nav-items">
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a (click)="openPlayOptions()" routerLinkActive="active">Play</a>
          <a (click)="toggleChat()">Chat</a>
        </div>

        <div class="auth-section">
          <ng-container *ngIf="!(currentUser$ | async); else userInfo">
            <button class="login-btn" (click)="openAuthDialog('login')">Login</button>
            <button class="signup-btn" (click)="openAuthDialog('signup')">Sign Up</button>
          </ng-container>
          
          <ng-template #userInfo>
            <span class="username">{{ (currentUser$ | async)?.username }}</span>
            <button class="login-btn" (click)="logout()">Logout</button>
          </ng-template>
        </div>
      </div>
    </nav>

    <app-chat [isOpen]="isChatOpen"></app-chat>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./nav-menu.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    RouterModule, 
    MatDialogModule, 
    ChatComponent
  ]
})
export class NavMenuComponent implements OnInit, OnDestroy {
  currentUser$ = this.authService.currentUser$;
  showPlayMenu = false;
  isChatOpen = false;
  private routerSubscription?: Subscription;

  constructor(
    private dialog: MatDialog, 
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event.url !== '/against-computer') {
        this.isChatOpen = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  public toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  public openAuthDialog(mode: 'login' | 'signup'): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '400px',
      data: { isLogin: mode === 'login' },
      panelClass: 'dark-theme-dialog'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Authentication successful');
      }
    });
  }

  public logout(): void {
    this.authService.logout();
  }

  public openPlayOptions(): void {
    if (!this.authService.isLoggedIn()) {
      this.openAuthDialog('login');
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