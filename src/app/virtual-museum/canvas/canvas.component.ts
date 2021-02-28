import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {PinIconComponent} from './pin-icon/pin-icon.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('map') canvas: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buildCanvas();
  }

  buildCanvas = () => {
    const context = this.canvas.nativeElement.getContext('2d');
    const svgData = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';
    const img = new Image();
    const svg = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8'});
    const url = URL.createObjectURL(svg);
    img.onload = () => {
      context.drawImage(img, 102, 20, 24, 24);
      context.drawImage(img, 157, 26, 24, 24);
      context.drawImage(img, 177, 75, 24, 24);
      context.drawImage(img, 90, 94, 24, 24);
      URL.revokeObjectURL(url);
    }
    img.src = url;
  };

}
