import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChartComponent } from '../app-chart/app-chart.component';
import { AppMapComponent } from '../app-map/app-map.component';

@Component({
  selector: 'app-dashboard-map',
  standalone: true,
  imports: [CommonModule, AppChartComponent, AppMapComponent],
  templateUrl: './dashboard-map.component.html',
  styleUrls: ['./dashboard-map.component.css']
})
export class DashboardMapComponent implements OnInit {
  charts = [
    // Array de dados para os gráficos
    { data: [/* dados do gráfico */], options: {/* opções do gráfico */} },
    // Adicione mais gráficos conforme necessário
  ];

  mapConfig = {
    // Configurações para o mapa
  };

  constructor() {}

  ngOnInit(): void {}
}
