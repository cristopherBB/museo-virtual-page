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
    pins.push({ x: 25, y: 38.5 });
    pins.push({ x: 37, y: 38.5 });
    pins.push({ x: 49.5, y: 38.5 });
    pins.push({ x: 61.5, y: 38.5 });
    pins.push({ x: 74, y: 38.5 });
    pins.push({ x: 85, y: 38.5 });
    pins.push({ x: 83.5, y: 56 });
    pins.push({ x: 35, y: 60 });
    this.tour.pins = pins;
    const views = [];
    views.push('View 1');
    views.push('View 2');
    views.push('View 3');
    views.push('View 4');
    views.push('View 5');
    views.push('View 6');
    views.push('View 7');
    views.push('View 8');
    this.tour.views = views;
    this.selectedView = this.tour.views[0];
  }

  onPinClick = (viewPosition: number): void => {
    this.selectedView = this.tour.views[viewPosition];
  };

}
