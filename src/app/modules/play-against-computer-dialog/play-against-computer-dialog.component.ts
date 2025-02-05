import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { StockfishService } from '../computer-mode/stockfish.service';
import { Color } from 'src/app/chess-logic/models';
import { Router } from '@angular/router';
import { AuthService } from '../nav-menu/auth.service';
import { AuthDialogComponent } from '../nav-menu/auth-dialog.component';

@Component({
  selector: 'app-play-against-computer-dialog',
  templateUrl: './play-against-computer-dialog.component.html',
  styleUrls: ['./play-against-computer-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule]
})
export class PlayAgainstComputerDialogComponent {
  public stockfishLevels: readonly number[] = [];
  public stockfishLevel: number = 1;

  constructor(
    private stockfishService: StockfishService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  public selectStockfishLevel(level: number): void {
    this.stockfishLevel = level;
  }

  public play(color: "w" | "b"): void {
    if (!this.authService.isLoggedIn()) {
      const dialogRef = this.dialog.open(AuthDialogComponent, {
        width: '400px',
        data: { isLogin: true }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.startGame(color);
        }
      });
    } else {
      this.startGame(color);
    }
  }

  private startGame(color: "w" | "b"): void {
    this.dialog.closeAll();
    this.stockfishService.computerConfiguration$.next({
      color: color === "w" ? Color.Black : Color.White,
      level: this.stockfishLevel
    });
    this.router.navigate(["against-computer"]);
  }

  public closeDialog(): void {
    this.router.navigate(["close"]);
  }
}

export class PlayAgainstComponent {
  showChat: boolean = false;
}