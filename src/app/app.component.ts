import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

// Amplify.configure(outputs);

@Component({
  selector: 'app-root', 
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [TodosComponent, HeaderComponent, AmplifyAuthenticatorModule],
  imports: [TodosComponent, HeaderComponent],
})

export class AppComponent {
  title = 'amplify-angular-template';
  // constructor(public authenticator: AuthenticatorService) {
  //   Amplify.configure(outputs);
  // }
}
