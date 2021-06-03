import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {DomSanitizer} from '@angular/platform-browser';
import { CustomHotspot, CustomImage, HotspotModal, InfoHotspot, SceneHotspot } from '../models/hotspot';
import { PannellumService } from '../services/pannellum.service';
import { RemoveHotspotComponent } from './remove-hotspot/remove-hotspot.component';
<<<<<<< 1d0b548199e97133a7d8804f30a1af19ce60a9d1
import { ModalMinimapComponent } from './modal_minimap/modal_minimap.component';
import { RemovePinsComponent } from './remove_pins/remove_pins.component';
=======

declare var pannellum: any;

>>>>>>> se eliminó la lgógica de validate schema en el toolcreator y se añadió al servicio de pannellum directamente

@Component({
  selector: 'app-tool-creator',
  templateUrl: './tool-creator.component.html',
  styleUrls: ['./tool-creator.component.scss']
})
export class ToolCreatorComponent implements OnInit {

  showPano = false;
  customIconField = false;
  modalField = false;
  election = false;
  nuevo_pin = false;
  minimapa = <HTMLImageElement>document.getElementById('minimapa');
  tour;
  selectedPin = 0;
  selectedView: string;

  hotspots = [
    {value: '', name: "Elegir un tipo"},
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

  // Inputs genericos
  hotspotTypeInput: FormControl = new FormControl('', [])
  hotspotTextInput: FormControl = new FormControl('', [])
  hotspotIdInput: FormControl = new FormControl('', [])
  hotspotCssClassInput: FormControl = new FormControl('', [])

  // Inputs especificos
  // De tipo Scene
  hotspotSceneIdInput: FormControl = new FormControl('', [Validators.required])

  // TODO: PARA IMPLEMENTARLOS LUEGO
  hotspotTargetPitchInput: FormControl = new FormControl('', [])
  hotspotTargetYawInput: FormControl = new FormControl('', [])


  // De tipo Info
  hotspotURLInput: FormControl = new FormControl('', [Validators.required])

  // De tipo custom
  hotspotCustomIconSrcInput: FormControl = new FormControl('', [])
  hotspotCustomIconAltInput: FormControl = new FormControl('', [])
  hotspotCustomIconWidthInput: FormControl = new FormControl('', [])
  hotspotCustomIconHeightInput: FormControl = new FormControl('', [])

  hotspotModalTitleInput: FormControl = new FormControl('', [])
  hotspotModalDescriptionInput: FormControl = new FormControl('', [])
  hotspotModalImageURLInput: FormControl = new FormControl('', [])

  // TODO: FALTA IMPLEMENTAR
  hotspotModalImageAltInput: FormControl = new FormControl('', [])
  hotspotModalImageWidthInput: FormControl = new FormControl('', [])
  hotspotModalImageHeightInput: FormControl = new FormControl('', [])


  urlA: any;

  // Vista principal de pannellum
  pannellumViewer: any;

  constructor(
    private sanitizer: DomSanitizer,
    public pannellumService: PannellumService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
<<<<<<< 1d0b548199e97133a7d8804f30a1af19ce60a9d1
    let local: any;
    this.tour = local;
=======
>>>>>>> se eliminó la lgógica de validate schema en el toolcreator y se añadió al servicio de pannellum directamente
  }

public cero() {
  this.showPano = true;
  this.election = true;
}

public goScene(scene) {
  this.pannellumService.setScene(scene);
}

  /**
   * addScene
   */
  public addScene() {
    let fileInput = document.getElementById('file')
    fileInput.click()
    this.election = false;
    this.showPano = true;
    
  }

  /**
   * onJsonFileChanged
   * 
   * Maneja las configuraciones que viene en archivo Json
   */
   onJsonFileChanged(event) {
    //console.log("hola");
    
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

  /**
  * openSnackBar
  *
  * Muestra una barra de información para explicarle al usuario cómo agregar un nuevo hotspot
  */
  openSnackBar(message: string, action: string){
    let snackbar_duration = 5000;
    this._snackBar.open(message, action, {duration: snackbar_duration});
  }

  /**
   * addHotspot
   */
  public addHotspot() {

    // Variable de error, por si algun campo reqeurido no fue llenado
    let error: boolean= false;
    // Para saber si es un hotspot nativo de pannellum o custom
    let useCustomFunction: boolean = false;

    // Valores genericos
    let hotspotType = this.hotspotTypeInput.value;
    let hotspotText = this.hotspotTextInput.value;
    let hotspotId = this.hotspotIdInput.value;
    let hotspotCssClass = this.hotspotCssClassInput.value;

    
    // Contruir el custom icon
    let icon: CustomImage = null;
    let iconSrc = this.hotspotCustomIconSrcInput.value
    let iconAlt = this.hotspotCustomIconAltInput.value
    let iconWidth = this.hotspotCustomIconWidthInput.value
    let iconHeight = this.hotspotCustomIconHeightInput.value

    if( iconSrc ){
      icon = {
        src: iconSrc,
        alt: iconAlt,
        width: iconWidth,
        height: iconHeight,
      }
    }

    // Declaracion de hotspot
    let hotspot: InfoHotspot | SceneHotspot | CustomHotspot;

    if( this.hotspotTypeInput.value == 'scene'){
      // Si existe error
      error = !this.hotspotSceneIdInput.valid 

      // Construccion
      let sceneId = this.hotspotSceneIdInput.value;
      
      hotspot = {
        text: hotspotText, 
        type: hotspotType,
        sceneId: sceneId,
        id: hotspotId,
        cssClass: hotspotCssClass,
      }

      if ( iconSrc ){
        hotspot.createTooltipArgs = {
          title: hotspotText,
          id: hotspotId,
          customIcon: icon
        }

        useCustomFunction = true;
      }
    }
    else if( this.hotspotTypeInput.value == 'info'){
      // Si existe error
      error = !this.hotspotURLInput.valid

      // Construccion
      let url = this.hotspotURLInput.value;
      hotspot = {
        text: hotspotText, 
        type: hotspotType,
        URL: url,
        id: hotspotId,
        cssClass: hotspotCssClass,
      }
    }
    else if( this.hotspotTypeInput.value == 'custom' ){
      // Activar para que sea custom
      useCustomFunction = true;

      // ///////////////////
      // Contruir el modal
      let modalTitle = this.hotspotModalTitleInput.value
      let modalDescription = this.hotspotModalDescriptionInput.value
      let modalImageSrc = this.hotspotModalImageURLInput.value
      let modal: HotspotModal = null;
      let imagen: CustomImage = null;
      // Contruir el modal
      if ( modalTitle ){
        if( modalImageSrc ){
          // Contruir la imagen del modal
          imagen = {
            src: modalImageSrc
          }
        }
        // Resto del modal
        modal = {
          title: modalTitle,
          description: modalDescription,
          imagen: imagen,
        }
      }


      // ////////////////////////
      // Construir el Hotspot
      hotspot = {
        text: hotspotText, 
        id: hotspotId,
        cssClass: hotspotCssClass,
        createTooltipArgs: {
          title: hotspotText,
          id: hotspotId,
          modal: modal,
          customIcon: icon
        }
      }


    }
    else{
      error = true
    }

    // Si no hay errores
    if( !error){
      console.log("GUARDADO");
      
      // Habilitar el evento
      this.pannellumService.enableAddHotspot(hotspotType, hotspot, useCustomFunction);

      // Mostrar mensaje guía al usuario para agregar el hotspot al recorrido
      let snackbar_message = "Haz click sobre el área de la imagen en donde deseas agregar el nuevo hotspot";
      this.openSnackBar(snackbar_message, "Ok")
    }
    else{
      console.log("ERROR");
      
    }

    
  }

  /**
   * removeHotspot
   */
  public removeHotspot(hotspot) {

    const dialogRef = this.dialog.open(RemoveHotspotComponent, {
      width: '250px',
      data: {name: hotspot.text}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if (result && result.result)
        this.pannellumService.removeHotspot(hotspot.id)
    });

  }

  get_url(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

 /**
  * onFileSelected(event)
  *
  * Funcion que permite abrir la imagen que se va a usar como minimapa
  */
  onFileSelected(event) {
    // colocamos el tour en vacio
    let local: any;
    this.tour = local;

    // permite verificar si ya se agrego un pin al minimapa
    this.nuevo_pin = false;

    // cambiamos el src para mostar la imagen
    var image = <HTMLImageElement>document.getElementById('minimapa');
    let nueva_url = URL.createObjectURL(event.target.files[0]);
    image.src = nueva_url
    this.minimapa = <HTMLImageElement>event.target.files[0];
  }

  /**
  * addPin()
  *
  * Funcion que permite anadir un pin al minimapa
  */
  public addPin() {
    // abrimos el modal
      const dialogRef = this.dialog.open(ModalMinimapComponent, {
        width: '400px',
        data: {escenas: this.pannellumService.getScenes(),minimapa: this.minimapa,tour_actual: this.tour}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.nuevo_pin = true;
        this.tour = result;
      });
  }

  /**
  * onPinClick()
  *
  * Funcion que permite mostrar la escena cuando se toca un pin del minimapa
  */
  onPinClick = (viewPosition: number): void => {

    this.selectedPin = viewPosition;
    this.selectedView = this.tour.result.views[viewPosition];


    this.pannellumService.setScene(this.selectedView);
  };

   /**
  * removePin()
  *
  * Funcion que permite anadir un pin al minimapa
  */
    public removePin() {
      // abrimos el modal
        const dialogRef = this.dialog.open(RemovePinsComponent, {
          width: '400px',
          data: {escenas: this.pannellumService.getScenes(),minimapa: this.minimapa,tour_actual: this.tour}
        });
  
        dialogRef.afterClosed().subscribe(result => {
          this.tour = result;
        });
    }


  /**
   * ---Carousel de escenas---
  */

  index = 0;

  /**
  * moveCarouselRight: Mueve el carousel hacia la derecha
  */
  public moveCarouselRight(){

    this.index++;

    const carousel_width = document.getElementById("carousel-container").offsetWidth;
    const cards_per_carousel = 5;
    const card_width = carousel_width / cards_per_carousel;

    let translation: number = this.index * card_width;
    document.getElementById("prev").style.display = "block";                                  // Muestra el botón izquierdo
    document.getElementById("track").style.transform = "translateX(-"+translation+"px)";      // Mueve el carousel

    // Cuando el carousel llega al final se quita el botón de la derecha
    if (document.getElementById("track").offsetWidth - (this.index * card_width) <= card_width * cards_per_carousel){
      document.getElementById("next").style.display = "none";
    }
  }

  /**
  * moveCarouselLeft: Mueve el carousel hacia la izquierda
  */
  public moveCarouselLeft(){

    this.index--;

    const carousel_width = document.getElementById("carousel-container").offsetWidth;
    const cards_per_carousel = 5;
    const card_width = carousel_width / cards_per_carousel;

    let translation: number = this.index * card_width;
    document.getElementById("next").style.display = "block";                                  // Muestra el botón derecho
    document.getElementById("track").style.transform = "translateX(-"+translation+"px)";      // Mueve el carousel

    // Cuando el carousel llega al principio se quita el botón de la izquierda
    if (this.index == 0){
      document.getElementById("prev").style.display = "none";
    }
  }
}