import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { NgxGaugeModule } from 'ngx-gauge';
import { AppChartComponent } from './app-chart.component';
import { of } from 'rxjs';
import * as L from 'leaflet';

const mockSensors = [
  { id: 'sensor1', currentWaterLevel: 20, supportedVolume: 100, latitude: 40.7128, longitude: -74.0060 },
  { id: 'sensor2', currentWaterLevel: 50, supportedVolume: 100, latitude: 34.0522, longitude: -118.2437 },
  { id: 'sensor3', currentWaterLevel: 80, supportedVolume: 100, latitude: 51.5074, longitude: -0.1278 }
];

class MockClient {
  static models = {
    Sensor: {
      observeQuery: () => of({ items: mockSensors, isSynced: true }),
      update: jasmine.createSpy('update').and.returnValue(Promise.resolve())
    }
  };
}

describe('AppChartComponent', () => {
  let component: AppChartComponent;
  let fixture: ComponentFixture<AppChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NgxEchartsDirective, NgxGaugeModule],
      providers: [
        { provide: 'client', useValue: MockClient },
        provideEcharts()
      ],
      declarations: [AppChartComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize sensors and chart data on ngOnInit', fakeAsync(() => {
    spyOn(component, 'listSensors').and.callThrough();
    component.ngOnInit();
    tick();
    expect(component.listSensors).toHaveBeenCalled();
    expect(component.sensors.length).toBe(3);
    expect(component.lineChartData.length).toBe(3);
  }));

  it('should update sensors with random water levels', fakeAsync(() => {
    component.sensors = mockSensors;
    spyOn(component, 'listSensors').and.callThrough();
    component.updateSensors();
    tick();
    expect(MockClient.models.Sensor.update).toHaveBeenCalledTimes(3);
    expect(component.listSensors).toHaveBeenCalled();
  }));

  it('should start and stop auto update interval', fakeAsync(() => {
    spyOn(component, 'updateSensors').and.callThrough();
    component.startAutoUpdate();
    tick(10000); 
    expect(component.updateSensors).toHaveBeenCalled();
    component.stopAutoUpdate();
    tick(10000); 
    expect(component.updateSensors).toHaveBeenCalledTimes(1);
  }));
});
