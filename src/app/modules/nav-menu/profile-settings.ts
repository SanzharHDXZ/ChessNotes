import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-settings',
  template: `
    <div class="settings-container bg-[#1a1a1a] text-white p-6 rounded-lg max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-6 border-b border-[#2d2d2d] pb-4">Account Settings</h2>
      
      <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-2 text-sm">First Name</label>
            <input 
              type="text" 
              formControlName="firstName"
              class="w-full bg-[#2d2d2d] text-white p-2 rounded-md border border-[#3d3d3d]"
            >
          </div>
          <div>
            <label class="block mb-2 text-sm">Last Name</label>
            <input 
              type="text" 
              formControlName="lastName"
              class="w-full bg-[#2d2d2d] text-white p-2 rounded-md border border-[#3d3d3d]"
            >
          </div>
        </div>

        <div>
          <label class="block mb-2 text-sm">Email</label>
          <input 
            type="email" 
            formControlName="email"
            class="w-full bg-[#2d2d2d] text-white p-2 rounded-md border border-[#3d3d3d]"
          >
        </div>

        <div>
          <label class="block mb-2 text-sm">Change Password</label>
          <input 
            type="password" 
            formControlName="newPassword"
            placeholder="New Password"
            class="w-full bg-[#2d2d2d] text-white p-2 rounded-md border border-[#3d3d3d] mb-2"
          >
          <input 
            type="password" 
            formControlName="confirmPassword"
            placeholder="Confirm New Password"
            class="w-full bg-[#2d2d2d] text-white p-2 rounded-md border border-[#3d3d3d]"
          >
        </div>

        <div>
          <label class="block mb-2 text-sm">Notification Preferences</label>
          <div class="flex items-center space-x-4">
            <label class="flex items-center">
              <input 
                type="checkbox" 
                formControlName="emailNotifications"
                class="mr-2 bg-[#2d2d2d]"
              >
              Email Notifications
            </label>
            <label class="flex items-center">
              <input 
                type="checkbox" 
                formControlName="gameNotifications"
                class="mr-2 bg-[#2d2d2d]"
              >
              Game Notifications
            </label>
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <button 
            type="button" 
            (click)="cancelChanges()"
            class="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ProfileSettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      newPassword: [''],
      confirmPassword: [''],
      emailNotifications: [false],
      gameNotifications: [false]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    // TODO: Implement method to load current user data from service
    this.settingsForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');

    return newPassword?.value === confirmPassword?.value 
      ? null 
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      // TODO: Implement save settings logic
      console.log(this.settingsForm.value);
    }
  }

  cancelChanges(): void {
    this.loadUserData();
  }
}