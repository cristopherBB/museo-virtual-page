import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UploadImageComponent} from '../../components/dialogs/upload-image/upload-image.component';

@Component({
  selector: 'app-add-museum',
  templateUrl: './add-museum.component.html',
  styleUrls: ['./add-museum.component.scss']
})
export class AddMuseumComponent implements OnInit {

  dialogRef: any;
  private dialogSub: Subscription;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openUploadImageDialog = (fileUrl: string): void => {
    // Prevent duplicated dialogs
    if (this.dialogSub) this.dialogSub.unsubscribe();
    if (this.dialogRef) this.dialogRef.close();
    // Open dialog
    this.dialogRef = this.dialog.open(UploadImageComponent, {
      width: '350px',
      height: '200px',
      data: { fileUrl },
    });
    this.dialogSub = this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  };

}


