import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild('map') canvas: ElementRef;
  @Input() pins: any[];
  @Input() selectedPin: number;
  @Output() onClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
}
