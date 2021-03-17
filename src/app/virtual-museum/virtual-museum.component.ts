import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-museum',
  templateUrl: './virtual-museum.component.html',
  styleUrls: ['./virtual-museum.component.scss']
})
export class VirtualMuseumComponent implements OnInit {
  tour = { pins: [], views: [] };
  selectedView: string;
  selectedPin = 0;
  @ViewChild('virtualView') virtualView: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const pins = [];
    // caminadora
    pins.push({ x: 15.5, y: 51.5 });
    pins.push({ x: 23.5, y: 51.5 });
    pins.push({ x: 33, y: 51.5 });
    pins.push({ x: 44.5, y: 51.5 });
    pins.push({ x: 56.5, y: 51.5 });
    pins.push({ x: 66, y: 51.5 });
    pins.push({ x: 75.8, y: 52.3 });
    // Puesto 2
    pins.push({ x: 36.7, y: 40 });
    // Puesto 4
    pins.push({ x: 62, y: 40});
    // puesto 7
    pins.push({ x: 84, y: 56 });
    this.tour.pins = pins;
    const views = [];
    views.push('pasillo-1');
    views.push('pasillo-2');
    views.push('pasillo-3');
    views.push('pasillo-4');
    views.push('pasillo-5');
    views.push('pasillo-6');
    views.push('pasillo-7');
    views.push('sala-2');
    views.push('tienda-chocolate');
    views.push('sala-fotografia');
    this.tour.views = views;
    this.selectedView = this.tour.views[0];
  }

  onPinClick = (viewPosition: number): void => {
    this.selectedPin = viewPosition;
    this.selectedView = this.tour.views[viewPosition];
  };

}
