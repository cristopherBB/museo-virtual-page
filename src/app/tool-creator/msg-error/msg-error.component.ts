import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss']
})
export class MsgErrorComponent implements OnInit {

  messageTitle: String;
  messageBody: String;

  constructor(
    public dialogRef: MatDialogRef<MsgErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.messageTitle = this.data.messageTitle;
    this.messageBody = this.data.messageBody;
  }

  close(){
    this.dialogRef.close()
  }
}
