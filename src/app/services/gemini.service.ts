import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
<<<<<<< HEAD
  private apiKey = environment.GEMINI_API_KEY; // Replace with your actual API key
=======
  private apiKey = ' '; // Replace with your actual API key
>>>>>>> 4d54d0f6f803619a5ab4e0e0f8e2a225aa32b730

  constructor(private http: HttpClient) {}

  // Configure headers with API key
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // Method to generate text using Gemini
  generateText(prompt: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/models/gemini-pro:generateContent`, 
      {
        contents: [{ 
          parts: [{ 
            text: prompt 
          }] 
        }]
      },
      {
        headers: this.getHeaders(),
        params: { key: this.apiKey }
      }
    );
  }

  generateTextWithImage(prompt: string, base64Image: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/models/gemini-pro-vision:generateContent`, 
      {
        contents: [{ 
          parts: [
            { text: prompt },
            { 
              inlineData: { 
                mimeType: 'image/jpeg',
                data: base64Image 
              } 
            }
          ] 
        }]
      },
      {
        headers: this.getHeaders(),
        params: { key: this.apiKey }
      }
    );
  }
}
