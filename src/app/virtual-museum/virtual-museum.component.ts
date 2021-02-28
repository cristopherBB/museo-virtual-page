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
    pins.push({ x: 40, y: 74 });
    pins.push({ x: 41, y: 24 });
    pins.push({ x: 53.7, y: 28.7 });
    pins.push({ x: 58.2, y: 61 });
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
