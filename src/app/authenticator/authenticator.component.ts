import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';


Amplify.configure(outputs);

@Component({
  selector: 'app-auth',
  standalone: true,
  imports:  [CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css',
})
export class AmplifyAuthenticator {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
