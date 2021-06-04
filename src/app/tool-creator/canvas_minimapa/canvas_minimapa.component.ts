import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas_minimapa',
  templateUrl: './canvas_minimapa.component.html',
  styleUrls: ['./canvas_minimapa.component.scss']
})
export class CanvasMinimapaComponent implements OnInit {
  @ViewChild('map') canvas: ElementRef;
  @Input() pins: any[];
  @Input() selectedPin: number;
  @Input() img: HTMLImageElement;
  @Input() place: boolean;
  @Output() onClick = new EventEmitter<number>();
  link: string;
  count = false;

  constructor() { }

  ngOnInit(): void {
    // Mostramos la imagen del minimapa
    this.link = URL.createObjectURL(this.img);
  }

  /**
  * onMouseClick()
  *
  * Funcion que permite verificar donde el usuario hizo click en la imagen. 
  * Se obtiene la posicion del click para colocar el pin en esa posicion.
  */
  onMouseClick(e: MouseEvent) {
    // verificamos si el usuario volvio a dar click en la imagen para eliminar una duplicacion.
    if(this.count && this.place){
      this.pins.pop();
    }
    // creamos el nuevo pin en la poscion del click
    if(this.place){
      this.pins.push({ x: ((e.offsetX * 100)/350), y: ((e.offsetY * 100)/260) });
      this.count = true;
    }
  }
}
