import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  template: `
    <div class="relative">
      <div 
        (click)="navigateToProfileSettings()" 
        class="flex items-center gap-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-md transition-colors"
      >
        <div class="flex flex-col">
          <span class="text-white text-sm font-medium">{{ username }}</span>
          <span class="text-gray-400 text-xs">{{ email }}</span>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ProfileMenuComponent {
  @Input() username: string = '';
  @Input() email: string = '';

  constructor(private router: Router) {}

  navigateToProfileSettings(): void {
    this.router.navigate(['/profile/settings']);
  }
}