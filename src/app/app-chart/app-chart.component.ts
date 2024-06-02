import { Component, Input } from '@angular/core';
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
export class AppChartComponent {
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
