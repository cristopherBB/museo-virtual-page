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
  @Input() imagen: HTMLImageElement;
  @Input() lugar: boolean;
  @Output() onClick = new EventEmitter<number>();
  enlace: string;
  conteo = false;

  constructor() { }

  ngOnInit(): void {
    // Mostramos la imagen del minimapa
    this.enlace = URL.createObjectURL(this.imagen);
  }

  /**
  * onMouseClick()
  *
  * Funcion que permite verificar donde el usuario hizo click en la imagen. 
  * Se obtiene la posicion del click para colocar el pin en esa posicion.
  */
  onMouseClick(e: MouseEvent) {
    // verificamos si el usuario volvio a dar click en la imagen para eliminar una duplicacion.
    if(this.conteo && this.lugar){
      this.pins.pop();
    }
    // creamos el nuevo pin en la poscion del click
    if(this.lugar){
      this.pins.push({ x: ((e.offsetX * 100)/350), y: ((e.offsetY * 100)/260) });
      this.conteo = true;
    }
  }
}
