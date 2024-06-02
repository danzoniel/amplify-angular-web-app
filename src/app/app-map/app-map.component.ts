import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {

  map: L.Map | undefined;
  latitude: number = 51.505; // Coordenada padrão
  longitude: number = -0.09; // Coordenada padrão

  ngOnInit(): void {
    this.loadMap();

    // // Simulação de obtenção de localização do banco de dados
    // this.fetchLocationFromDatabase().then(location => {
    //   this.latitude = location.latitude;
    //   this.longitude = location.longitude;
    //   this.updateMapLocation();
    // });
  }

  loadMap(): void {
    this.map = L.map('map').setView([this.latitude, this.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([this.latitude, this.longitude]).addTo(this.map)
      .bindPopup('Localização Inicial.')
      .openPopup();
  }

  updateMapLocation(): void {
    if (this.map) {
      this.map.setView([this.latitude, this.longitude], 13);

      L.marker([this.latitude, this.longitude]).addTo(this.map)
        .bindPopup('Nova Localização.')
        .openPopup();
    }
  }

  fetchLocationFromDatabase(): Promise<{ latitude: number, longitude: number }> {
    // Simulação de chamada a um banco de dados
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ latitude: 40.7128, longitude: -74.0060 }); // Coordenadas de Nova York
      }, 2000);
    });
  }
}
