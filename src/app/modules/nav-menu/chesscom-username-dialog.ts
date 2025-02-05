import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-chess-username-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>Enter Chess.com Username</h2>
    <mat-dialog-content>
      <form [formGroup]="chessUsernameForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline">
          <mat-label>Chess.com Username</mat-label>
          <input 
            matInput 
            formControlName="username" 
            placeholder="Enter your Chess.com username"
          >
          <mat-error *ngIf="chessUsernameForm.get('username')?.invalid">
            Username is required
          </mat-error>
        </mat-form-field>
        <div class="button-container">
          <button 
            mat-raised-button 
            color="primary" 
            type="submit" 
            [disabled]="chessUsernameForm.invalid"
          >
            Start Game
          </button>
        </div>
      </form>
    </mat-dialog-content>
  `,
  styles: [`
    mat-form-field {
      width: 100%;
    }
    .button-container {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
  `]
})
export class ChessUsernameDialogComponent {
  chessUsernameForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChessUsernameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      opponent: 'friend' | 'computer', 
      stockfishStrength: number 
    }
  ) {
    this.chessUsernameForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.chessUsernameForm.valid) {
      const username = this.chessUsernameForm.get('username')?.value;
      this.dialogRef.close({
        username,
        opponent: this.data.opponent,
        stockfishStrength: this.data.stockfishStrength
      });
    }
  }
}