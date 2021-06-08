import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { CustomHotspot, InfoHotspot, SceneHotspot } from '../models/hotspot';
import { ModalComponent } from '../virtual-museum/modal/modal.component';
import { ApiService } from './api.service';

import Ajv, {JSONSchemaType} from "ajv"
import {DefinedError} from "ajv"
import { HttpClient } from '@angular/common/http';
const ajv = new Ajv()

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
  customFunction: boolean;

  // Para Agregar un nuevo hotspot
  hotspotType: string;
  nextAddHotspot: CustomHotspot | SceneHotspot | InfoHotspot;

  schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "imagen": {
        "type": "object",
        "properties": {
          "alt": {"type": "string"},
          "height": {"type": "number"},
          "src": {"type": "string"},
          "width": {"type": "number"}
        }
      },
      "modal": {
        "type": "object",
        "properties": {
          "description": {"type": "string"},
          "imagen": {"$ref": "#/definitions/imagen"},
          "title": {"type": "string"},
          "type": {"type": "string"}
        }
      },
      "customIcon": {
        "type": "object",
        "properties": {
          "alt": {"type": "string"},
          "height": {"type": "number"},
          "src": {"type": "string"},
          "width": {"type": "number"}
        }
      },
      "createTooltipArgs": {
        "type": "object",
        "properties": {
          "customIcon":  {"$ref": "#/definitions/customIcon"},
          "id": {"type": "string"},
          "modal": {"$ref": "#/definitions/modal"},
          "title": {"type": "string"}
        }
      },
      "hotspot": {
        "type": "array",
        "items": {
          "properties": {
            "id":  { "type": "string" },
            "sceneId": {"type": "string"},
            "pitch": { "type": "number" },
            "cssClass": { "type": "string" },
            "targetPitch": {"type": "number"},
            "targetYaw": {"type": "number"},
            "text": {"type": "string"},
            "type": {"type": "string"},
            "yaw": {"type": "number"},
            "createTooltipArgs":  { "$ref": "#/definitions/createTooltipArgs"},
            "createTooltipFunc": {"type": "string"},
            "div": {"type": "string"},
            "url": {"type": "string"}
          },
          "required": ["id"]
        },
        "default": []
      },
      "scene": {
        "type": "array",
        "items": {
          "properties": {
            "title": {"type": "string"},
            "panorama": {"type": "string"},
            "type": {"type": "string"},
            "yaw": {"type": "number"},
            "hotspots": { "$ref": "#/definitions/hotspot"}
          },
          "required": ["title"]
        },
        "default": []
      }
    },
    "type": "object",
    "properties": {
      "scene": { "$ref": "#/definitions/scene" }
    },
    "required": ["scene"]
  }

  constructor(
    public dialog: MatDialog,
    public apiServive: ApiService,
    public http: HttpClient

  ) { }

  /**
   * generateId
   *
   * Generar un id totalmente random para manjear los hotspot a traves de la API de Pannellum
   * @param id id del elemento
   * @returns newId, el nuevo id generado aleatoreamente
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
   * @param config Json que viene del archivo de configuracion con los parametros del tour
   * @returns sceneJson, el json formateado de manera que sea legible para pannellum para poder construir el tour
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

              if ( hotspot['icono'] ){
                aux.createTooltipFunc = this.hotspot.bind(this),
                aux.createTooltipArgs= {
                    'title': hotspot['titulo'],
                    'id': hotspot['id_hotspot'],
                    'customIcon': {
                      'src': hotspot['icono'] || null,
                      'alt': hotspot['attr_alt'] || null,
                      'width': hotspot['ancho_icono'] || null,
                      'height': hotspot['altura_icono'] || null,
                    }
                  }

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
                  }
                }
              }
            }

            if(hotspot['mostrar_modal']=='local'){
              aux.createTooltipArgs.modal = {
                  'type': "local",
                  'title': hotspot['titulo_modal'] || null,
                  'description': hotspot['descripcion_modal'] || null,
                  'imagen': {
                    'src': hotspot['imagen_modal'] || null,
                    'alt': hotspot['attr_alt'] || null,
                    'width': hotspot['ancho_imagen'] || null,
                    'height': hotspot['altura_imagen'] || null,
                  }
              }
            }else if (hotspot['mostrar_modal']=='db') {

              aux.createTooltipArgs.modal = {
                "type": "db",
                "id":  hotspot['id_obra'],
                'imagen': {
                  'src': hotspot['imagen_modal'] || null,
                  'alt': hotspot['attr_alt'] || null,
                  'width': hotspot['ancho_imagen'] || null,
                  'height': hotspot['altura_imagen'] || null,
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
    let scenes = [];
    for (const k in this.sceneJson) { scenes.push(this.sceneJson[k]) };

    let json = {
      "scene": scenes
    }

    let validateSchema = this.validateSchema(json);

    if (!validateSchema[0]) {
      return {error: validateSchema[1]};
    }

    return this.sceneJson;
  }


  /**
   * initPannellum
   *
   * iniciar pannellum
   * @param panoramaHTML id del elemento panorama en el DOM
   * @param viewId primera escena a mostrar
   * @param sceneJson json formateado de manera que sea legible para pannellum para poder construir el tour
   * @param edit determina si el tour sera editable o no
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
   * Activar el evento de click
   *
   * @param b booleano para activar el evento click
   */
  public toogleAddHotspot(b: boolean) {

    this.mouseToogle = b;
  }

  /**
   * enableAddHotspot
   * Al agregar un hotspot en el toolCreator, se guardan las configuraciones y habilitar el evento click
   * @param hotspotType El tipo del hostpot
   * @param hotspot El hotspot
   * @param customFun para usar la funcion custom o no
   */
  public enableAddHotspot(hotspotType, hotspot, customFun = false) {

    // Activar el evento
    this.toogleAddHotspot(true)

    // Guardar el tipo de hotspot
    this.hotspotType = hotspotType;

    // hotspot
    this.nextAddHotspot = hotspot;

    // Si se va a usar la funcion custom
    this.customFunction = customFun

  }

  /**
   * getInitialScene
   *  Devuelve el la scena solicitada
   *
   * @param index indice de la escena
   * @returns escena o null, segun exista el indice
   */
  public getInitialScene(index: number) {
    console.log(this.scenes);

    if (this.scenes.length > index)
      return this.scenes[index]
    return null
  }


  /**
   * addHotspot
   * Agregar el hotspot
   * @param coords Coordenadas donde se dio click para agregar el hotspot
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


    if (this.customFunction ){
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
   * Eliminar hotspot
   * @param id Id del hotspot a eliminar
   */
  public removeHotspot(id: string) {

    this.pannellumViewer.removeHotSpot(id, this.activeScene)
    console.log(this.sceneJson);

  }

  /**
   * getScenes
   * DEvuelve las escenas
   * @returns scenes Escenas del tour
   */
  public getScenes() {
    return this.scenes;
  }

  /**
   * getHotspots
   * Devuelve los hotspots de la escena activa
   * @returns lista de hostspot en caso de existir
   */
  public getHotspots() {
    if ( this.sceneJson ){
      if( this.sceneJson[this.activeScene] ){
        return this.sceneJson[this.activeScene]['hotSpots']
      }
    }
    return []
  }

  /**
   * openModal
   * Prepara la info que se va a mostrar en el Modal
   * @param data Informacion del modal
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

  /**
  * hotspot
  *
  * Funcion de creacion de hotspot custom
  * @param hotSpotDiv div del hotspot
  * @param args Argumentos custom del hotspot
  */
  public hotspot(hotSpotDiv, args) {

    console.log(`Cargando Hotspot ${args.title}`);

    // Custom class
    hotSpotDiv.classList.add('custom-tooltip');

    // Custom ID
    hotSpotDiv.id = args.id;


    // Se crea el evento para abrir el modal
    if (args.modal) {

      if ( args.modal.type === "db"){
        this.apiServive.getArtefact(args.modal.id).subscribe(
          data =>{

            let modalData = {
              'title': data.result[0].artifactLabel.value || null,
              'description': data.result[0].note.value || null,
              'imagen': {
                'src': args.modal.imagen.src,
                'alt': args.modal.imagen.alt,
                'width': args.modal.imagen.width,
                'height': args.modal.imagen.height,
              }
            }

            let modal = document.getElementById(args.id)
            modal.onclick = () => this.openModal(modalData)

          }
        );
      }
      else{
        let modal = document.getElementById(args.id)
        modal.onclick = () => this.openModal(args.modal)
      }

    }

    // Create span element to tooltip
    var span = document.createElement('span');
    span.innerHTML = args.title;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = (- (span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 24) + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    span.classList.add('custom-tooltip-span');

    // Se crea el evento para abrir el modal
    if (args.modal && args.modal.title) {
      let modal = document.getElementById(args.id)
      modal.onclick = () => this.openModal(args.modal)
    }

    // Custom icon
    if (args.customIcon && args.customIcon.src) {
      // Quitamos la clase de pannellum para quitar el icono por defecto
      hotSpotDiv.classList.remove('pnlm-hotspot')

      let width = args.customIcon.width || "50";
      let height = args.customIcon.height || "50";

      $(`#${args.id}`).append(
        `<img src="${args.customIcon.src}" alt="${args.customIcon.alt}" width="${width}" height="${height}">`
      );
    }

  }

  /**
   * OutputJson
   *
   * Genera un json a patir de las scenas almacenadas
   */
  public OutputJson() {



  }


  /**
   * setScene
   * Establece la escena a mostrar
   * @param sceneId id de la escena
   */
  setScene = (sceneId: string): void => {
    if (this.pannellumViewer) this.pannellumViewer.loadScene(sceneId);
  }

  /**
   * Nota: Para usar este service es necesario que el panellum este iniciado. El usuarlo sin que el panellum se encuentre instanciado puede
   * traer como consecuencia la aparicion de errores referentes a que las escenas no tienen ningun hotpots.
   * 
   * getAllHotspots
   * Obtiene todos los hotspots del recorrido
   * @return arreglo con todos los hotspots del recorrido
   */
  public getAllHotspots() {

    let hotspots = [];
    if ( this.sceneJson ){

      for (let i in this.scenes) {
        for (let j of this.sceneJson[this.scenes[i]]['hotSpots']){
          hotspots.push(j)
        }
      }
      return hotspots;
    }
    return []
  }

  /**
   * Nota: Para usar este service es necesario que el panellum este iniciado. El usuarlo sin que el panellum se encuentre instanciado puede
   * traer como consecuencia la aparicion de errores referentes a que las escenas no tienen ningun hotpots.
   * 
   * getCurrentSceneHotspots
   * Obtiene la lista de hotspots de la escena actual
   * @return arreglo con todos los hotspots de la escena
   */
  public getCurrentSceneHotspots() {
    if (this.pannellumViewer ){
      let p = this.pannellumViewer.getScene();
      return this.sceneJson[p]['hotSpots']
    }
    return []
  }

  /**
  * Nota: Para usar este service es necesario que el panellum este iniciado. El usuarlo sin que el panellum se encuentre instanciado puede
  * traer como consecuencia la aparicion de errores referentes a que las escenas no tienen ningun hotpots.
  * 
  * getImageSource
  * Obtiene la ruta de la imagen de una escena
  * @param scene_id id de la escena
  */
  public getImageSource(scene_id: string) {
    if ( this.sceneJson ){
      if( this.sceneJson[scene_id] ){
        return this.sceneJson[scene_id]['panorama']
      }
    }
    return []
  }

  /**
  * Nota: Para usar este service es necesario que el panellum este iniciado. El usuarlo sin que el panellum se encuentre instanciado puede
  * traer como consecuencia la aparicion de errores referentes a que las escenas no tienen ningun hotpots.
  * 
  * getSceneTitle
  * Obtiene el título de una escena
  * @param scene_id id de la escena
  */
  public getSceneTitle(scene_id: string) {
    if ( this.sceneJson ){
      if( this.sceneJson[scene_id] ){
        return this.sceneJson[scene_id]['title']
      }
    }
    return []
  }

  public validateSchema(data) {
    console.log("json to validate: ");
    console.log(data);
    var validate = ajv.compile(this.schema);
    var valid = validate(data);
  
    if (valid) {
      // data is MyData here
      console.log('is valid');
      console.log(data)
      return [true, ''];
    } else {
      // The type cast is needed, as Ajv uses a wider type to allow extension
      // You can extend this type to include your error types as needed.
      for (const err of validate.errors as DefinedError[]) {
        console.log('is not valid');
        return [false, validate.errors[0].message]
        }
      }
    }
}