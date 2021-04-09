import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import { PannellumService } from '../services/pannellum.service';

declare var pannellum: any;


@Component({
  selector: 'app-tool-creator',
  templateUrl: './tool-creator.component.html',
  styleUrls: ['./tool-creator.component.scss']
})
export class ToolCreatorComponent implements OnInit {

  showPano = false;
  hotspots = [
    {value: 'scene', name: 'Escena'},
    {value: 'info', name: 'Info'},
    {value: 'custom', name: 'Personalizado'}
  ];

  // FILES
  fileToUpload: File = null;
  jsonFile: File = null;


  // Config 
  jsonConfig = null;
  scenes: Array<string> = [];

  // Inputs
  hotspotTypeInput: FormControl = new FormControl('scene', [])


  urlA: any;
  pannellumViewer: any;
  constructor(
    private sanitizer: DomSanitizer,
    public pannellumService: PannellumService,
  ) { }

  ngOnInit(): void {
  }


  /**
   * addScene
   */
  public addScene() {
    let fileInput = document.getElementById('file')
    fileInput.click()

    this.showPano = true
  }


  /**
   * onJsonFileChanged
   * 
   * Maneja las configuraciones que viene en archivo Json
   */
   onJsonFileChanged(event) {
    console.log("hola");
    
    this.jsonFile = event.target.files[0];
    // Leer archivo como texto
    const fileReader = new FileReader();
    fileReader.readAsText(this.jsonFile, "UTF-8");

    // Cuando cargue
    fileReader.onload = (e) => {
    // Parsearlo a Json
    this.jsonConfig = JSON.parse(String(e.target.result));
    
    // Contruir el panorama 
     this.constructPannellum()
    }

    // Si da error la carga
    fileReader.onerror = (error) => {
      console.log(error);
      alert("No se pudo cargar el config :(")
    }
  }

  /**
   * constructPannellum
   * 
   * Funcion para contruir un viewer a partir de un json
   */
  public constructPannellum() {
    // Cargar las escenas con las configs obtenidas del json
    let escenas = this.pannellumService.constructScenes(this.jsonConfig)

    // Obtener la escene inicial, por defecto el indice 0, es decir la primera escena
    let initialView: string = this.pannellumService.getInitialScene(0)

    // Iniciar pannellum con las escenas obtenidas
    this.pannellumService.initPannellum('panorama', initialView, escenas, true)

    // Mostrar el div de panorama y ocultar lo demas.
    this.showPano = true;
  }


  /**
   * handleFileInput
   * 
   * Maneja las fotos de las esceneas que se suban
   */
  public handleFileInput(files: FileList) {
    //   this.fileToUpload = files.item(0);
      
    //   console.log(this.fileToUpload);
      
    //   let imgFile = document.getElementById('img-file');
    //   let url = URL.createObjectURL(this.fileToUpload)

    //   // imgFile.src = url
    //   this.urlA = url

    //   console.log(this.urlA);
      
    //   this.escenas.push(url);
    //   // let reader = new FileReader();
    //   // reader.readAsDataURL(this.fileToUpload);
    //   // reader.onload = (event) => {
    //   //   this.escenas.push(reader.result)
    //   // }
  }

  get_url(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
