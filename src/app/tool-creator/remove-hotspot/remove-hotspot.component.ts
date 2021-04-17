import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PannellumService } from 'src/app/services/pannellum.service';

@Component({
  selector: 'app-remove-hotspot',
  templateUrl: './remove-hotspot.component.html',
  styleUrls: ['./remove-hotspot.component.scss']
})
export class RemoveHotspotComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveHotspotComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {

  }

  remove(){
    this.dialogRef.close({
      result: true,
    })
  }

  close(){
    this.dialogRef.close({
      result: false,
    })
  }

}
