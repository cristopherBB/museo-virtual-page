import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PannellumService } from 'src/app/services/pannellum.service';

@Component({
  selector: 'app-eliminar_pins',
  templateUrl: './eliminar_pins.component.html',
  styleUrls: ['./eliminar_pins.component.scss']
})
export class EliminarPinsComponent implements OnInit {
  seleccionado: string = "Pin a eliminar";
  tour = { pins: [], views: [] };
  selectedView: string;
  selectedPin = 0;
  img: HTMLImageElement;
  escenas_disponibles = [];
  tamano_viejo = 0;
  tamano_nuevo = 0;

  constructor(
    public dialogRef: MatDialogRef<EliminarPinsComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    
      this.tour = this.data.tour_actual.result;

  }

  close(){
    this.dialogRef.close({
      result: this.tour,
    })
  }

  aceptar(){
    this.tour.pins.splice( parseInt(this.seleccionado), 1 );
    this.tour.views.splice( parseInt(this.seleccionado), 1 );
    this.dialogRef.close({
      result: this.tour,
    })
  }

}
