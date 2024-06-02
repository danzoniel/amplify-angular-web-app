import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `<div>Map Component</div>`, // Substitua com o template real do seu mapa
})
export class AppMapComponent {
  @Input() config: any;
}
