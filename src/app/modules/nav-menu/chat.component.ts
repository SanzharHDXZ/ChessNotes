import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService} from 'src/app/services/gemini.service';


interface ChatMessage {
  text: string;
  sender: 'user' | 'bot' | 'gemini';
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-container" [class.open]="isOpen">
      <div class="chat-header">
        <span>Chat</span>
        <button class="close-btn" (click)="isOpen = false">×</button>
      </div>
      <div class="chat-messages" #scrollContainer>
        <div *ngFor="let message of messages" 
             class="message" 
             [class.user]="message.sender === 'user'"
             [class.bot]="message.sender === 'bot'"
             [class.kaggle]="message.sender === 'gemini'">
          <div class="message-content">{{ message.text }}</div>
          <div class="message-timestamp">{{ message.timestamp | date:'shortTime' }}</div>
        </div>
      </div>
      <div class="chat-input">
        <input [(ngModel)]="newMessage" (keyup.enter)="sendMessage()" placeholder="Type a message..." />
      </div>
    </div>
  `,
  styles: [`
    .chat-container {
      position: fixed;
      right: -820px;
      bottom: 160px;
      width: 500px;
      height: 540px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      transition: right 0.3s ease;
      z-index: 1000;

    }

    .chat-container.open {
      right: 20px;
    }

    .chat-header {
      background: #007bff;
      color: #fff;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px 8px 0 0;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0 5px;
    }

    .chat-messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .message {
      padding: 8px 12px;
      border-radius: 15px;
      max-width: 80%;
      word-break: break-word;
    }

    .message-content {
      margin-bottom: 4px;
    }

    .message-timestamp {
      font-size: 0.75rem;
      opacity: 0.7;
    }

    .message.user {
      background: #007bff;
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 5px;
    }

    .message.bot {
      background: #e9ecef;
      color: #212529;
      align-self: flex-start;
      border-bottom-left-radius: 5px;
    }

    .chat-input {
      display: flex;
      padding: 10px;
      gap: 8px;
      border-top: 1px solid #dee2e6;
    }

    .chat-input input {
      flex: 1;
      padding: 8px;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      outline: none;
    }

    .chat-input button {
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .chat-input button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .chat-input button:not(:disabled):hover {
      background: #0056b3;
    }

    .message.kaggle {
      background-color: #e0f7fa;
      color: #006064;
      border-left: 4px solid #006064;
    }
  `]
})
export class ChatComponent {
  @Input() isOpen = true;
  messages: ChatMessage[] = [];
  newMessage = '';

  constructor(private geminiService: GeminiService) {}

  sendMessage(): void {
    if (!this.newMessage.trim()) return;

    const userMessage: ChatMessage = {
      text: this.newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    this.messages.push(userMessage);

    // Request to kaggle
    this.geminiService.generateText(this.newMessage).subscribe({
      next: (response) => {
        const botMessage: ChatMessage = {
          text: response.candidates[0].content.parts[0].text,
          sender: 'gemini',
          timestamp: new Date(),
        };
        this.messages.push(botMessage);
      },
      error: () => {
        const errorMessage: ChatMessage = {
          text: 'Failed to get responses from Gemini.',
          sender: 'gemini',
          timestamp: new Date(),
        };
        this.messages.push(errorMessage);
      },
    });

    this.newMessage = '';
  }
}