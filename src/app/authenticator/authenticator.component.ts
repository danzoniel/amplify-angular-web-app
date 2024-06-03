import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

Amplify.configure(outputs);

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css'],
})
export class AuthenticatorComponent {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
