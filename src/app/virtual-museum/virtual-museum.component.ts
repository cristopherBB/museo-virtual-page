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
    pins.push({ x: 40, y: 62 });
    pins.push({ x: 43, y: 51 });
    pins.push({ x: 53.7, y: 28.7 });
    pins.push({ x: 60, y: 63 });
    this.tour.pins = pins;
    const views = [];
    views.push('View 1');
    views.push('View 2');
    views.push('View 3');
    views.push('View 4');
    this.tour.views = views;
    this.selectedView = this.tour.views[0];
  }

  onPinClick = (viewPosition: number): void => {
    this.selectedView = this.tour.views[viewPosition];
  };

}
