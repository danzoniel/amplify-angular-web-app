import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardMapComponent } from './dashboard-map/dashboard-map.component';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, AmplifyAuthenticatorModule, DashboardMapComponent],
})
export class AppComponent {
  title = 'amplify-angular-template';
    
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
