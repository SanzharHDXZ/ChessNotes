
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private showChatSubject = new BehaviorSubject<boolean>(true);
  showChat$ = this.showChatSubject.asObservable();

  toggleChat() {
    this.showChatSubject.next(!this.showChatSubject.value);
  }
}