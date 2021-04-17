import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Artifact } from 'src/app/models/artifact.model';

interface DialogData {
  artifact: Artifact;
}

@Component({
  selector: 'app-artifact-details',
  templateUrl: './artifact-details.component.html',
  styleUrls: ['./artifact-details.component.scss']
})
export class ArtifactDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ArtifactDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
