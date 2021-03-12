import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-museum',
  templateUrl: './virtual-museum.component.html',
  styleUrls: ['./virtual-museum.component.scss']
})
export class VirtualMuseumComponent implements OnInit {
  tour = { pins: [], views: [] };
  selectedView: string;
  @ViewChild('virtualView') virtualView: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const pins = [];
    pins.push({ x: 16, y: 53 });
    pins.push({ x: 26, y: 53 });
    pins.push({ x: 36, y: 53 });
    pins.push({ x: 46, y: 53 });
    pins.push({ x: 56, y: 53 });
    pins.push({ x: 66, y: 53 });
    pins.push({ x: 76, y: 53 });
    pins.push({ x: 36.6, y: 41.5 });
    pins.push({ x: 62, y: 41.5 });
    pins.push({ x: 84, y: 57 });
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
    this.selectedView = this.tour.views[viewPosition];
  };

}
