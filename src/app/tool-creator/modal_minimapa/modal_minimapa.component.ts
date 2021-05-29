import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PannellumService } from 'src/app/services/pannellum.service';

@Component({
  selector: 'app-modal_minimapa',
  templateUrl: './modal_minimapa.component.html',
  styleUrls: ['./modal_minimapa.component.scss']
})
export class ModalMinimapaComponent implements OnInit {
  seleccionado: string = "Escena a navegar";
  tour = { pins: [], views: [] };
  selectedView: string;
  selectedPin = 0;
  img: HTMLImageElement;
  escenas_disponibles = [];
  tamano_viejo = 0;
  tamano_nuevo = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalMinimapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.img = this.data.minimapa;
    
    if(this.data.tour_actual){
      this.tour = this.data.tour_actual.result;
    }
    this.tamano_viejo = this.tour.pins.length;
    this.escenas_disponibles = this.data.escenas.filter(el => !this.tour.views.includes(el));

  }

  close(){
    // verificamos el tamaño de los arreglos de pines para verificar si se agrego uno nuevo o no
    this.tamano_nuevo = this.tour.pins.length
    if(this.tamano_nuevo > this.tamano_viejo){
      this.tour.pins.pop()
    }
    this.dialogRef.close({
      result: this.tour,
    })
  }

  aceptar(){
    // verificamos el tamaño de los arreglos de pines para verificar si se agrego uno nuevo o no
      this.tamano_nuevo = this.tour.pins.length
    if(this.tamano_nuevo > this.tamano_viejo){
      this.tour.views.push(this.seleccionado);
    }
      this.dialogRef.close({
      result: this.tour,
    })
  }

}
