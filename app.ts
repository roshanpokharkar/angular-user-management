
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  username = '';
  email = '';
  password = '';

  loginEmail = '';
  loginPassword = '';

  registeredUser: any = null;
  currentUser: any = null;
  message = '';

  register() {
    if (!this.username || !this.email || !this.password) {
      this.message = 'Please fill all fields!';
      return;
    }

    this.registeredUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.message = 'Registration successful! Please login.';
  }

  login() {
    if (
      this.registeredUser &&
      this.loginEmail === this.registeredUser.email &&
      this.loginPassword === this.registeredUser.password
    ) {
      this.currentUser = this.registeredUser;
      this.message = 'Login successful!';
    } else {
      this.message = 'Invalid email or password!';
    }
  }

  logout() {
    this.currentUser = null;
    this.loginEmail = '';
    this.loginPassword = '';
    this.message = 'You have logged out.';
  }
}
