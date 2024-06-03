import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { NgxGaugeModule } from 'ngx-gauge';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxGaugeModule],
  templateUrl: './app-chart.component.html',
  styleUrl: './app-chart.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class AppChartComponent implements OnInit {
  charts = [
    { data: this.getDataForTimeframe('30min'), options: {/* opções do gráfico */} }
  ];

  constructor() {}

  ngOnInit(): void {}


  onTimeFilterChange(timeframe: string): void {
    this.charts[0].data = this.getDataForTimeframe(timeframe);
  }

  getDataForTimeframe(timeframe: string) {
    // Simulação de dados baseados no intervalo de tempo
    switch (timeframe) {
      case '5min':
        return {
          datasets: [
            {
              data: [65, 59, 80, 81, 56],
              label: 'Nível de Água (últimos 5 min)',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            }
          ],
          labels: ['00:00', '00:01', '00:02', '00:03', '00:04']
        };
      case '30min':
        return {
          datasets: [
            {
              data: [65, 59, 80, 81, 56, 55, 40],
              label: 'Nível de Água (últimos 30 min)',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            }
          ],
          labels: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30']
        };
      // Adicione mais casos conforme necessário
      default:
        return {
          datasets: [
            {
              data: [65, 59, 80, 81, 56, 55, 40],
              label: 'Nível de Água (últimos 30 min)',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            }
          ],
          labels: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30']
        };
    }
  }


  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      },
    ],
  };

  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr"; 
}
