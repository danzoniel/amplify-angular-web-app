import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { NgxGaugeModule } from 'ngx-gauge';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxGaugeModule],
  templateUrl: './app-chart.component.html',
  styleUrls: ['./app-chart.component.css'],
  providers: [
    provideEcharts(),
  ]
})
export class AppChartComponent implements OnInit, OnDestroy {
  sensors: any[] = [];
  private updateInterval: any;
  gaugeValue = 70;  // Valor inicial do gauge

  // Dados do gráfico de linha
  lineChartData: number[] = [];

  constructor() {}
  
  ngOnInit(): void {
    this.listSensors();
    this.startAutoUpdate();
  }
  
  ngOnDestroy(): void {
    this.stopAutoUpdate();
  }

  listSensors() {
    try {
      client.models.Sensor.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.sensors = items;
          this.updateLineChartData();
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  async updateSensors() {
    try {
      for (const sensor of this.sensors) {
        const updatedSensorData = {
          ...sensor,
          currentWaterLevel: Math.floor(Math.random() * (sensor.supportedVolume + 1))
        };
        
        await client.models.Sensor.update(updatedSensorData);
      }

      this.listSensors();
      this.updateLineChartData(); 
    } catch (error) {
      console.error('error updating sensors', error);
    }
  }

  updateLineChartData() {
    this.lineChartData = this.sensors.map(sensor => sensor.currentWaterLevel);
    this.updateChartOptions(); 
  }

  updateChartOptions() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.sensors.map(sensor => sensor.id), 
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.lineChartData,
          type: 'line',
          areaStyle: {}
        },
      ],
    };
  }

  startAutoUpdate() {
    this.updateInterval = setInterval(() => {
      this.updateSensors();
    }, 10000);
  }

  stopAutoUpdate() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [], 
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'line',
        areaStyle: {}
      },
    ],
  };

  gaugeThresholds = {
    '0': { color: 'green' },
    '50': { color: 'yellow' },
    '70': { color: 'red' }
  };

  gaugeType = "semi";
  gaugeLabel = "Volume";
  gaugeAppendText = "v3";
  gaugeMaxValue = 100;
}
