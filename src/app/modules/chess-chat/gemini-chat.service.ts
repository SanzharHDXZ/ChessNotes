import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiChatService {
  private genAI: GoogleGenerativeAI;
  private chatHistory: Array<{role: string, parts: string}> = [];

  constructor() {
    // Replace with your actual API key
    this.genAI = new GoogleGenerativeAI('YOUR_GEMINI_API_KEY');
  }

  generateResponse(message: string): Observable<string> {
    const model = this.genAI.getGenerativeModel({ 
      model: "gemini-pro"
    });

  
    if (this.chatHistory.length === 0) {
      this.chatHistory = [
        { role: 'user', parts: 'You are a helpful AI assistant.' }
      ];
    }


    this.chatHistory.push({ role: 'user', parts: message });

    return from(
      model.generateContent(
        this.chatHistory.map(item => `${item.role}: ${item.parts}`).join('\n')
      ).then(result => {
        const response = result.response.text();
        
        this.chatHistory.push({ role: 'model', parts: response });

        return response;
      })
    );
  }
}