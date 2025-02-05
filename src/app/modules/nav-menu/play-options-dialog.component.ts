import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-play-options-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Choose Your Opponent</h2>
    <mat-dialog-content>
      <div class="opponent-options">
        <button mat-raised-button color="primary" (click)="selectOpponent('computer')">
          Play against computer
        </button>
      </div>
    </mat-dialog-content>
  `,
  styles: [`
    .opponent-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    button {
      width: 100%;
      padding: 1rem;
    }
  `]
})
export class PlayOptionsDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PlayOptionsDialogComponent>,
    private authService: AuthService
  ) {}

  selectOpponent(opponent: 'friend' | 'computer') {
    this.dialogRef.close({ opponent });
  }
}
  