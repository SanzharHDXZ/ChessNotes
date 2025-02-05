import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('scrollMe') private scrollContainer!: ElementRef;
  
  messages: { name: string; text: string }[] = [];
  newMessage: string = '';

  constructor() {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ name: 'You', text: this.newMessage });
      this.newMessage = '';

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ name: 'Bot', text: 'Hello! How can I help you?' });
      }, 500);
    }
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }
}