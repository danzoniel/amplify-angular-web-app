import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  sensors: any[] = [];

  map: L.Map | undefined;
  initialLatitude: number = -23.7377748; 
  initialLongitude: number = -46.5863227; 
  initialZoom: number = 13; 

  firstPin = {
    latitude: this.initialLatitude,
    longitude: this.initialLongitude,
    popupText: 'Localização Inicial'
  };

  secondPin = {
    latitude: -23.7277748,
    longitude: -46.5763227,
    popupText: 'Localização em Nova York'
  };

  ngOnInit(): void {
    this.listSensors();
    this.loadMap();
  }

  listSensors() {
    try {
      client.models.Sensor.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.sensors = items;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  loadMap(): void {
    this.map = L.map('map').setView([this.initialLatitude, this.initialLongitude], this.initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    
    L.marker([this.initialLatitude, this.initialLongitude]).addTo(this.map)
      .bindPopup("sensor2")
      .openPopup();

    L.marker([this.secondPin.latitude, this.secondPin.longitude]).addTo(this.map)
      .bindPopup("sensor3");
  }

  updateMapLocation(): void {
    if (this.map) {
      this.map.setView([this.firstPin.latitude, this.firstPin.longitude], this.initialZoom);

      L.marker([this.firstPin.latitude, this.firstPin.longitude]).addTo(this.map)
        .bindPopup('Nova Localização.')
        .openPopup();
    }
  }

  resetMap(): void {
    if (this.map) {
      this.map.setView([this.initialLatitude, this.initialLongitude], this.initialZoom);

     
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map?.removeLayer(layer);
        }
      });

      L.marker([this.firstPin.latitude, this.firstPin.longitude]).addTo(this.map)
        .bindPopup(this.firstPin.popupText)
        .openPopup();

      L.marker([this.secondPin.latitude, this.secondPin.longitude]).addTo(this.map)
        .bindPopup(this.secondPin.popupText);
    }
  }

  fetchLocationFromDatabase(): Promise<{ latitude: number, longitude: number }> {
   
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ latitude: 40.7128, longitude: -74.0060 });
      }, 2000);
    });
  }
}
