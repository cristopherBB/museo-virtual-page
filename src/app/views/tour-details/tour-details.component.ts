import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeleteComponent } from 'src/app/components/dialogs/delete/delete.component';
import { UploadImageComponent } from 'src/app/components/dialogs/upload-image/upload-image.component';
// import { DeleteMuseumComponent} from 'src/app/components/delete-museum/delete-museum.component'
import { MuseumOverview } from 'src/app/models/museum.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  museum: MuseumOverview;
  museumViews = [];
  editMode = false;
  private museumId: string;
  private paramsSub: Subscription;
  dialogRef: any;
  private dialogSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe(params => {
      this.museumId = params.id;
      if (!this.museumId) this.router.navigateByUrl('/');
      this.api.getMuseumDetails(this.museumId).then(this.setMuseum).catch(console.error);
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSub) this.paramsSub.unsubscribe();
    if (this.dialogSub) this.dialogSub.unsubscribe();
  }

  setMuseum = (museum: MuseumOverview) => {
    console.log(museum);
    this.museum = museum;
    if (museum) {
      this.museumViews = [
        this.museum.featuredImage,
        this.museum.featuredImage,
        this.museum.featuredImage,
        this.museum.featuredImage,
      ];
    } else {
      this.museumViews = [];
    }
  };

  openUploadImageDialog = (): void => {
    // Prevent duplicated dialogs
    if (this.dialogSub) this.dialogSub.unsubscribe();
    if (this.dialogRef) this.dialogRef.close();
    // Open dialog
    this.dialogRef = this.dialog.open(UploadImageComponent, {
      width: '350px',
      height: '200px',
      data: { fileUrl: null },
    });
    this.dialogSub = this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  };

  openDeleteDialog = (): void => {
    // Prevent duplicated dialogs
    if (this.dialogSub) this.dialogSub.unsubscribe();
    if (this.dialogRef) this.dialogRef.close();
    // Open dialog
    this.dialogRef = this.dialog.open(DeleteComponent, {
      width: '450px',
      height: '250px',
      data: { title: this.museum.title }
    });
    this.dialogSub = this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  };

  toggleEditMode = (): void => {
    this.editMode = !this.editMode;
  }

  saveChanges = (): void => {
    console.log('saving changes', this.museum);
    this.toggleEditMode();
  }

  // deleteMuseum = (fileUrl: string): void => {
  //   // Prevent duplicated dialogs
  //   if (this.dialogSub) this.dialogSub.unsubscribe();
  //   if (this.dialogRef) this.dialogRef.close();
  //   // Open dialog
  //   this.dialogRef = this.dialog.open(DeleteMuseumComponent, {
  //     width: '350px',
  //     height: '200px',
  //     data: { fileUrl },
  //   });
  //   this.dialogSub = this.dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', result);
  //   });
  // };
}
