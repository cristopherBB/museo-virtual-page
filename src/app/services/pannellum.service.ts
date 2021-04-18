import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import { CustomHotspot, InfoHotspot, SceneHotspot } from '../models/hotspot';
import { ModalComponent } from '../virtual-museum/modal/modal.component';

declare var pannellum

@Injectable({
  providedIn: 'root'
})
export class PannellumService {

  pannellumViewer: any;
  sceneJson: Object = {};
  scenes: Array<string> = [];
  mouseToogle: boolean = false;
  activeScene: string;

  // Para Agregar un nuevo hotspot
  hotspotType: string;
  nextAddHotspot: CustomHotspot | SceneHotspot | InfoHotspot;

  constructor(
    public dialog: MatDialog
  ) { }

  /**
   * generateId
   * 
   * Generar un id totalmente random para manjear los hotspot a traves de la API de Pannellum
   */
  private generateId(id: string) {
    //  existe el id, usar ese
    if (id)
      return id;

    // Crear un nuevo id con la estructura 'tc-xxxx'
    let newId = 'tc-' + String(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

    return newId

  }

  /**
   * constructScenes
   * 
   * Construir las escenas a partir de un archivo de configuracion 
   */
  public constructScenes(config) {

    // leer el archivo de configuracion
    // Construir cada Escena 
    this.sceneJson = {};
    config.escenas.forEach(
      escena => {
        // Guardar el orden de las escenas
        this.scenes.push(escena['id'])

        // Construir cada Hotspot con la config
        let hotspotsArray = [];
        escena.hotspots.forEach(
          hotspot => {

            // Crear los hotspot segun el tipo
            let type = hotspot['tipo']
            let aux;

            // Usar el id o generarlo en caso de no especificarlo
            let id = this.generateId(hotspot['id_hotspot'])

            // SCENE HOTSPOT
            if (type == "scene") {
              aux = {
                'id': id,
                'pitch': hotspot['valor_angulo_y'],
                'yaw': hotspot['valor_angulo_x'],
                'text': hotspot['titulo'],
                'type': hotspot['tipo'],
                'sceneId': hotspot['id_escena'],
                'targetYaw': hotspot['targetYaw'] || -23,
                'targetPitch': hotspot['targetPitch'] || 2,
                'cssClass': hotspot['clase_css'],
              }
            }

            // INFO HOTSPOT
            else if (type == "info") {
              aux = {
                'id': id,
                'pitch': hotspot['valor_angulo_y'],
                'yaw': hotspot['valor_angulo_x'],
                'text': hotspot['titulo'],
                'type': hotspot['tipo'],
                "URL": hotspot['url'],
                'sceneId': hotspot['id_escena'],
                'cssClass': hotspot['clase_css'],
              }
            }
            // CUSTOM HOTSPOT
            else {
              aux = {
                'id': id,
                'pitch': hotspot['valor_angulo_y'],
                'yaw': hotspot['valor_angulo_x'],
                'text': hotspot['titulo'],
                'sceneId': hotspot['id_escena'],
                'targetYaw': hotspot['targetYaw'] || -23,
                'targetPitch': hotspot['targetPitch'] || 2,
                'cssClass': hotspot['clase_css'],
                'createTooltipFunc': this.hotspot.bind(this),
                'createTooltipArgs': {
                  'title': hotspot['titulo'],
                  'id': hotspot['id_hotspot'],
                  'customIcon': {
                    'src': hotspot['icono'] || null,
                    'alt': hotspot['attr_alt'] || null,
                    'width': hotspot['ancho_icono'] || null,
                    'height': hotspot['altura_icono'] || null,
                  },
                  'modal': {
                    'title': hotspot['titulo_modal'] || null,
                    'description': hotspot['descripcion_modal'] || null,
                    'imagen': {
                      'src': hotspot['imagen_modal'] || null,
                      'alt': hotspot['attr_alt'] || null,
                      'width': hotspot['ancho_imagen'] || null,
                      'height': hotspot['altura_imagen'] || null,
                    }
                  }
                }
              }
            }

            // Agregar el hotspot al array
            hotspotsArray.push(aux)
          }
        )

        // Construccion de la Scena
        let escenaAux = {
          "title": escena['titulo'],
          "hfov": escena['hfov'] || 110,
          "yaw": escena['yaw'] || 150,
          "panorama": escena['img-360'],
          "type": "equirectangular",
          "hotSpots": hotspotsArray,
        }

        this.sceneJson[escena['id']] = escenaAux

      }
    )

    return this.sceneJson
  }


  /**
   * initPannellum
   * 
   * iniciar pannellum
   */
  public initPannellum(panoramaHTML, viewId, sceneJson, edit = null) {

    console.info("Iniciando pannellum");

    // Guardar la escena activa
    this.activeScene = viewId

    // Iniciar pannellum
    this.pannellumViewer = pannellum.viewer(panoramaHTML, {
      "showFullscreenCtrl": true,
      "autoLoad": true,
      "multiResMinHfov": true,
      "default": {
        "firstScene": viewId,
        "sceneFadeDuration": 1000
      },
      "scenes": sceneJson
    })


    // Activar los eventos para agregar hotspots
    if (edit) {

      // Evento para click del mouse agregar un nuevo hotspot
      this.pannellumViewer.on('mousedown',
        (e) => {
          if (this.mouseToogle) {
            let a = this.pannellumViewer.mouseEventToCoords(e);
            // console.log(a);
            this.toogleAddHotspot(false)
            this.addHotspot(a)
          }
        }
      );

    }
  }

  /**
   * toogleAddHotspot
   */
  public toogleAddHotspot(b: boolean) {
    // Activar el evento de click
    this.mouseToogle = b;
  }

  /**
   * enableAddHotspot
   */
  public enableAddHotspot(hotspotType, hotspot) {

    // Activar el evento
    this.toogleAddHotspot(true)

    // Guardar el tipo de hotspot
    this.hotspotType = hotspotType;

    // hotspot
    this.nextAddHotspot = hotspot;

  }

  /**
   * getInitialScene
   */
  public getInitialScene(index: number) {
    console.log(this.scenes);

    if (this.scenes.length > index)
      return this.scenes[index]
    return null
  }


  /**
   * addHotspot
   */
  public addHotspot(coords: Array<number>) {

    console.log(this.nextAddHotspot);
    

    // Coordenadas
    let pitch = coords[0];
    let yaw = coords[1];
    this.nextAddHotspot.pitch = pitch;
    this.nextAddHotspot.yaw = yaw;

    // Agregar ID si no tiene
    this.nextAddHotspot.id = this.generateId(this.nextAddHotspot.id)


    if (this.hotspotType == 'custom'){
      // Agregar la funcion custom
      this.nextAddHotspot.createTooltipFunc = this.hotspot.bind(this)

      // guardar el mismo id
      this.nextAddHotspot.createTooltipArgs.id = this.nextAddHotspot.id
    }

    // Agregar el hotspot
    this.pannellumViewer.addHotSpot(this.nextAddHotspot, this.activeScene)

    console.log(this.sceneJson);
    
  }

  /**
   * removeHotspot
   */
  public removeHotspot(id: string) {

    this.pannellumViewer.removeHotSpot(id, this.activeScene)
    console.log(this.sceneJson);
    
  }

  /**
   * getScenes
   */
  public getScenes() {
    return this.scenes;
  }

  /**
   * getHotspots
   */
  public getHotspots() {
    if ( this.sceneJson ){
      if( this.sceneJson[this.activeScene] ){
        return this.sceneJson[this.activeScene]['hotSpots']
      }
    }
    return []
  }

  /*
   * openModal
   * 
   * Prepara la info que se va a mostrar en el Modal
   */
  public openModal(data) {
    // Search modal
    console.log(`Abriendo Modal de ${data.title}`);

    // Width del modal
    let w = 300;
    let h = 300;
    if(data.imagen){
      // Se calcula en base al width de la imagen.
      w = (data.imagen.width > 800 ? 350 : data.imagen.width + 50) || 300;
      h = (data.imagen.width > 800 ? 350 : data.imagen.width + 50) || 300;
    }


    // Llamar el modal
    const dialogRef = this.dialog.open(ModalComponent, {
      width: w + 'px',
      data: {
        title: data.title,
        description: data.description,
        extra: data.extra,
        image: data.imagen,
        imageWidth: w,
        imageHeight: h
      }
    });


  }

  /*
  * hotspot
  * 
  * Funcion de creacion de hotspot custom
  */
  public hotspot(hotSpotDiv, args) {

    console.log(`Cargando Hotspot ${args.title}`);

    // Custom class
    hotSpotDiv.classList.add('custom-tooltip');
    // Custom ID
    hotSpotDiv.id = args.id;


    // Create span element to tooltip
    var span = document.createElement('span');
    span.innerHTML = args.title;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = (-(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 24) + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    span.classList.add('custom-tooltip-span');

    // Se crea el evento para abrir el modal 
    if (args.modal && args.modal.title) {
      let modal = document.getElementById(args.id)
      modal.onclick = () => this.openModal(args.modal)
    }

    // Custom icon
    if (args.customIcon && args.customIcon.src) {
      let width = args.customIcon.width || "50";
      let height = args.customIcon.height || "50";

      $(`#${args.id}`).append(
        `<img src="${args.customIcon.src}" alt="${args.customIcon.alt}" width="${width}" height="${height}">`
      );
    }


  }
}
