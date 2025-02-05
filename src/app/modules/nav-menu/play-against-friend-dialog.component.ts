import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-play-against-friend-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatSliderModule, FormsModule],
  template: `
    <h2 mat-dialog-title>Game Settings</h2>
    <mat-dialog-content>
      <div class="settings-container">
        <div class="color-selection">
          <h3>Choose Your Color</h3>
          <div class="color-buttons">
            <button mat-raised-button (click)="selectedColor = 'white'" 
                    [class.selected]="selectedColor === 'white'">White</button>
            <button mat-raised-button (click)="selectedColor = 'black'"
                    [class.selected]="selectedColor === 'black'">Black</button>
          </div>
        </div>
    
      </div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onStart()">Start Game</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .settings-container {
      padding: 1rem;
    }

    .color-selection, .strength-selection {
      margin-bottom: 1.5rem;
    }

    .color-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
    }

    .selected {
      background-color: #007bff;
      color: white;
    }

    mat-slider {
      width: 100%;
    }
  `]
})
export class PlayAgainstFriendDialogComponent {
  selectedColor: 'white' | 'black' = 'white';

  constructor(
    private dialogRef: MatDialogRef<PlayAgainstFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data?.selectedColor) {
      this.selectedColor = data.selectedColor;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onStart(): void {
    this.dialogRef.close({
      color: this.selectedColor,
    });
  }
}