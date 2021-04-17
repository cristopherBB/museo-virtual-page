import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
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
  hotspotType: string;
  hotspotText: string;

  constructor(
    public dialog: MatDialog
  ) { }


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

            // SCENE HOTSPOT
            if (type == "scene") {
              aux = {
                'pitch': hotspot['valor_angulo_y'],
                'yaw': hotspot['valor_angulo_x'],
                'text': hotspot['titulo'],
                'type': hotspot['tipo'],
                'sceneId': hotspot['id_escena'],
                'targetYaw': hotspot['targetYaw'] || -23,
                'targetPitch': hotspot['targetPitch'] || 2,
              }
            }

            // INFO HOTSPOT
            else if (type == "info") {
              aux = {
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
  public enableAddHotspot(hotspotType, hotspotText) {

    // Activar el evento
    this.toogleAddHotspot(true)

    // Guardar el tipo de hotspot
    this.hotspotType = hotspotType;

    // texto
    this.hotspotText = hotspotText

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

    let hotspot = {
      'pitch': coords[0],
      'yaw': coords[1],
      'text': this.hotspotText,
      'type': this.hotspotType,
    }

    // Agregar hotspot a la lista de hotspots
    // this.sceneJson[this.activeScene]['hotSpots'].push(hotspot)

    
    this.pannellumViewer.addHotSpot(hotspot)
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
    // Se calcula en base al width de la imagen.
    let w = (data.imagen.width > 800 ? 350 : data.imagen.width + 50) || 300;
    let h = (data.imagen.width > 800 ? 350 : data.imagen.width + 50) || 300;

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


    // Se crea el evento para abrir el modal 
    if (args.modal) {
      let modal = document.getElementById(args.id)
      modal.onclick = () => this.openModal(args.modal)
    }

    // Create span element to tooltip
    var span = document.createElement('span');
    span.innerHTML = args.title;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = (-(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 24) + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    span.classList.add('custom-tooltip-span');

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
