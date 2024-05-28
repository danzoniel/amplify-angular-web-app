import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticator } from '../authenticator/authenticator.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports:  [CommonModule, AmplifyAuthenticator],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent{
  isAuthVisible = false;

  showAuthComponent(event: Event): void {
    event.preventDefault();
    this.isAuthVisible = true;
  }
}