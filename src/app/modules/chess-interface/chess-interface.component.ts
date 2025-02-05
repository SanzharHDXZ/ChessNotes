import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-interface',
  templateUrl: './chess-interface.component.html',
  styleUrls: ['./chess-interface.component.scss']
})
export class ChessInterfaceComponent {
  showPlayOptions = false;
  gameStarted = false;

  togglePlayOptions(): void {
    this.showPlayOptions = !this.showPlayOptions;
  }

  startGame(opponent: 'friend' | 'computer'): void {
    this.gameStarted = true;
    this.showPlayOptions = false;
  }
}