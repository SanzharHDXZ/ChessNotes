import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { Color } from 'src/app/chess-logic/models';

@Component({
  selector: 'app-play-against-computer-dialog',
  templateUrl: './play-against-friend-dialog.component.html',
  styleUrls: ['./play-against-friend-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule]
})
export class PlayAgainstFriendrDialogComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  public play(color: "w" | "b"): void {
    this.dialog.closeAll();
      color: color === "w" ? Color.Black : Color.White,
    this.router.navigate(["against-friend"]);
  }
  public closeDialog(): void {
    this.router.navigate(["close"]);
  }
}

export class PlayAgainstComponent {
  showChat: boolean = false;
}