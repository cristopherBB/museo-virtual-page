import { Component, OnInit, SecurityContext } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tool-creator',
  templateUrl: './tool-creator.component.html',
  styleUrls: ['./tool-creator.component.scss']
})
export class ToolCreatorComponent implements OnInit {


  fileToUpload: File = null;

  escenas = [];
  urlA: any;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }


  /**
   * addScene
   */
  public addScene() {
    console.log("Hola");
    let fileInput = document.getElementById('file')
    fileInput.click()
    
  }

  /**
   * handleFileInput
   * 
   * Maneja las fotos de las esceneas que se suban
   */
  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    
    console.log(this.fileToUpload);
    
    let imgFile = document.getElementById('img-file');
    let url = URL.createObjectURL(this.fileToUpload)

    // imgFile.src = url
    this.urlA = url

    console.log(this.urlA);
    
    this.escenas.push(url);
    // let reader = new FileReader();
    // reader.readAsDataURL(this.fileToUpload);
    // reader.onload = (event) => {
    //   this.escenas.push(reader.result)
    // }
  }

  get_url(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
