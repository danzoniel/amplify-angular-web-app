import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  template: `<div>Chart Component</div>`, // Substitua com o template real do seu gráfico
})
export class AppChartComponent {
  @Input() data: any;
  @Input() options: any;
}
