import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';
import { config } from './config'
import { ModalComponent } from '../modal/modal.component';

declare var pannellum: any;

@Component({
  selector: 'app-virtual-view',
  templateUrl: './virtual-view.component.html',
  styleUrls: ['./virtual-view.component.scss']
})
export class VirtualViewComponent implements OnInit {
  @Input() viewId: string;

  // Element ID for pano
  panoramaHTML = 'panorama'

  // Pannellum Viewer
  pannellumViewer;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.viewId);

    // leer el archivo de configuracion
    // Construir cada Escena 
    let sceneJson = {};
    config.escenas.forEach(
      escena => {
        // Construir cada Hotspot con la config
        let hotspotsArray = [];
        escena.hotspots.forEach(
          hotspot => {

            // Crear los hotspot segun el tipo
            let type = hotspot['tipo']
            let aux;

            // SCENE HOTSPOT
            if ( type == "scene" ){
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
            else if ( type == "info" ){
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
                      'width': hotspot['ancho_icono'] || null,
                      'height': hotspot['altura_icono'] || null,
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

        sceneJson[escena['id']] = escenaAux

      }
    )


    // Create pannellum viewer
    this.pannellumViewer = pannellum.viewer(this.panoramaHTML, {
        "showFullscreenCtrl": true,
        "autoLoad": true,
        "multiResMinHfov": true,
        "default": {
          "firstScene": this.viewId,
          "sceneFadeDuration": 1000
        },
        "scenes":sceneJson,
        // "scenes": {
        //   "pasillo-1": {
        //     "title": "Pasillo 1",
        //     "hfov": 110,
        //     "yaw": 150,
        //     "type": "equirectangular",
        //     "panorama": "assets/titles/hacienda/pasillo-1/pasillo-1-4x-qudratic.jpg",

        //     "hotSpots": [
        //       {
        //         "pitch": 1,
        //         "yaw": 200,
        //         "type": "scene",
        //         "text": "Pasillo 2",
        //         "sceneId": "pasillo-2",
        //         "targetYaw": 120,
        //         "targetPitch": 3
        //       },
        //       {
        //         "pitch": -3, //arriba - abajo
        //         "yaw": 150, // izq - der
        //         "cssClass": "custom-hotspot-img custom-img",
        //         "createTooltipFunc": this.hotspot.bind(this),
        //         "createTooltipArgs": {
        //           "title": "Mapa",
        //           "id": "hotspot-mapa",
        //           "customIcon": {
        //             "src": "/assets/images/mapa-pasillo-1.jpg",
        //             "width": 200,
        //             "height": 200
        //           },
        //           "modal": {
        //             "title": "Mapa cuchi",
        //             "description": "Un Amplio espacio donde frecuentemente hay eventos de Música de Cámara",
        //             "imagen": {
        //               "src": "/assets/images/mapa-pasillo-1.jpg",
        //               "width": 600,
        //               "height": 600
        //             }
        //           }
        //         },
        //       },
        //       {
        //         "pitch": -8, //arriba - abajo
        //         "yaw": 304, // izq - der
        //         "cssClass": "custom-hotspot-icon",
        //         "createTooltipFunc": this.hotspot,
        //         "createTooltipArgs": {
        //           "title": "Salon de Concierto",
        //           "id": "hotspot-concierto-icon"
        //         },
        //       },
        //     ]
        //   }
          // "pasillo-2": {
          //   "title": "Pasillo 2",
          //   "hfov": 110,
          //   "yaw": 130,
          //   "pitch": 3,
          //   "type": "equirectangular",
          //   "panorama": "assets/titles/hacienda/pasillo-2.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": 1,
          //       "yaw": 205,
          //       "type": "scene",
          //       "text": "Pasillo 3",
          //       "sceneId": "pasillo-3",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 1,
          //       "yaw": 40,
          //       "type": "scene",
          //       "text": "Pasillo 1",
          //       "sceneId": "pasillo-1",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //   ]
          // },
          // "pasillo-3": {
          //   "title": "Pasillo 3",
          //   "hfov": 110,
          //   "yaw": 0,
          //   "pitch": 3,
          //   "type": "equirectangular",
          //   "panorama": "assets/titles/hacienda/pasillo-3.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": 1,
          //       "yaw": 90,
          //       "type": "scene",
          //       "text": "Pasillo 4",
          //       "sceneId": "pasillo-4",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 1,
          //       "yaw": -90,
          //       "type": "scene",
          //       "text": "Pasillo 2",
          //       "sceneId": "pasillo-2",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 0, //arriba - abajo
          //       "yaw": 0, // izq - der
          //       "cssClass": "custom-hotspot-icon latido",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "Sala de Secado 2",
          //         "id": "hotspot-galeria-icon",
          //         "customIcon": {
          //           "src": "/assets/images/galeria-arte.svg",
          //           "alt": "Galeria"
          //         }
          //       },
          //       "type": "scene",
          //       "sceneId": "sala-2",
          //     },
          //   ]
          // },
          // "sala-2": {
          //   "title": "Pasillo 2",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "/assets/titles/hacienda/sala-2/sala-2_digital_art_x4.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": -8,
          //       "yaw": 200,
          //       "type": "scene",
          //       "text": "Pasillo 3",
          //       "sceneId": "pasillo-3",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": -4, //arriba - abajo
          //       "yaw": 360, // izq - der
          //       "cssClass": "custom-hotspot-icon",
          //       "createTooltipFunc": this.hotspot.bind(this),
          //       "createTooltipArgs": {
          //         "title": " Caraotas- Jorge Pedro Nuñez",
          //         "id": "hotspot-obra-1-sala-2-img",
          //         "modal": {
          //           "title": "Caraotas- Jorge Pedro Nuñez",
          //           "description": "La prática artística de Jorge Pedro Nuñez está ligada a su experiencia como historiador del arte, debido a lo que sus obras aluden a múltiples referencias, tanto artísticas como contextuales",
          //           "imagen": {
          //             "src": "/assets/titles/hacienda/sala-2/obras/obra-1.jpg",
          //             "alt": "Obra 1"
          //           }
          //         },
          //         "customIcon":{
          //           "src": "/assets/titles/hacienda/sala-2/obras/obra-1.jpg",
          //           "alt": "Obra 1"
          //         }
          //       },
          //     },
          //     {
          //       "pitch": -4, //arriba - abajo
          //       "yaw": 110, // izq - der
          //       "cssClass": "custom-hotspot-icon",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "NOMBRE OBRA 2",
          //         "id": "hotspot-obra-2-sala-2-img",
          //         "customIcon":{
          //           "src": "/assets/titles/hacienda/sala-2/obras/obra-2.jpg",
          //           "alt": "Obra 2"
          //         }
          //       },
          //     },
          //     {
          //       "pitch": -4, //arriba - abajo
          //       "yaw": 230, // izq - der
          //       "cssClass": "custom-hotspot-icon",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "NOMBRE OBRA 3",
          //         "id": "hotspot-obra-3-sala-2-img",
          //         "customIcon":{
          //           "src": "/assets/titles/hacienda/sala-2/obras/obra-3.jpg",
          //           "alt": "Obra 3"
          //         }
          //       },
          //     },
          //   ]
          // },
          // "pasillo-4": {
          //   "title": "Pasillo 4",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "/assets/titles/hacienda/pasillo-4.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": 1,
          //       "yaw": 90,
          //       "type": "scene",
          //       "text": "Pasillo 5",
          //       "sceneId": "pasillo-5",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 1,
          //       "yaw": -90,
          //       "type": "scene",
          //       "text": "Pasillo 3",
          //       "sceneId": "pasillo-3",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 0, //arriba - abajo
          //       "yaw": -4, // izq - der
          //       "cssClass": "custom-hotspot-icon latido",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "Sala de Secado 3",
          //         "id": "hotspot-galeria-icon",
          //         "customIcon": {
          //           "src": "/assets/images/galeria-arte.svg",
          //           "alt": "Galeria"
          //         }
          //       },
          //       "type": "scene",
          //       "sceneId": "sala-3",
          //     },
          //   ]
          // },
          // "pasillo-5": {
          //   "title": "Pasillo 5",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "/assets/titles/hacienda/pasillo-5.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": 1,
          //       "yaw": 90,
          //       "type": "scene",
          //       "text": "Pasillo 6",
          //       "sceneId": "pasillo-6",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 1,
          //       "yaw": -90,
          //       "type": "scene",
          //       "text": "Pasillo 4",
          //       "sceneId": "pasillo-4",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 5, //arriba - abajo
          //       "yaw": 0, // izq - der
          //       "cssClass": "custom-hotspot-icon latido",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "Tienda de Chocolate",
          //         "id": "hotspot-chocolate-icon",
          //         "customIcon": {
          //           "src": "/assets/images/chocolate.svg",
          //           "alt": "Chocolate"
          //         }
          //       },
          //       "type": "scene",
          //       "sceneId": "tienda-chocolate",
          //     },
          //     {
          //       "pitch": -7, //arriba - abajo
          //       "yaw": 195, // izq - der
          //       "cssClass": "custom-hotspot-img custom-img",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "Mapa",
          //         "id": "hotspot-mapa"
          //       },
          //     },
          //   ]
          // },
          // "tienda-chocolate": {
          //   "title": "Tienda de Chocolate",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "assets/titles/hacienda/cacao/cacao_photos_v2_faces_x4_toned.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": -3,
          //       "yaw": -15,
          //       "type": "scene",
          //       "text": "Pasillo 5",
          //       "sceneId": "pasillo-5",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //   ]
          // },
          // "pasillo-6": {
          //   "title": "Pasillo 6",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "/assets/titles/hacienda/pasillo-6.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": 1,
          //       "yaw": 90,
          //       "type": "scene",
          //       "text": "Pasillo 7",
          //       "sceneId": "pasillo-7",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 1,
          //       "yaw": -90,
          //       "type": "scene",
          //       "text": "Pasillo 5",
          //       "sceneId": "pasillo-5",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 0, //arriba - abajo
          //       "yaw": 110, // izq - der
          //       "cssClass": "custom-hotspot-icon latido",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "Sala de Curso de Fotografia",
          //         "id": "hotspot-camara-icon",
          //         "customIcon": {
          //           "src": "/assets/images/camara.svg",
          //           "alt": "Camara"
          //         }
          //       },
          //       "type": "scene",
          //       "sceneId": "sala-fotografia",
          //     },
          //   ]
          // },
          // "sala-fotografia": {
          //   "title": "Sala de Curso Fotografia",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "/assets/titles/hacienda/fotoclase.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": -3,
          //       "yaw": 290,
          //       "type": "scene",
          //       "text": "Pasillo 6",
          //       "sceneId": "pasillo-6",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //   ]
          // },
          // "pasillo-7": {
          //   "title": "Pasillo 7",
          //   "hfov": 110,
          //   "yaw": 150,
          //   "type": "equirectangular",
          //   "panorama": "/assets/titles/hacienda/pasillo-final.jpg",

          //   "hotSpots": [
          //     {
          //       "pitch": 1,
          //       "yaw": -90,
          //       "type": "scene",
          //       "text": "Pasillo 6",
          //       "sceneId": "pasillo-6",
          //       "targetYaw": -23,
          //       "targetPitch": 2
          //     },
          //     {
          //       "pitch": 0, //arriba - abajo
          //       "yaw": 210, // izq - der
          //       "cssClass": "custom-hotspot-icon latido",
          //       "createTooltipFunc": this.hotspot,
          //       "createTooltipArgs": {
          //         "title": "Sala de Curso de Fotografia",
          //         "id": "hotspot-camara-icon",
          //         "customIcon": {
          //           "src": "/assets/images/camara.svg",
          //           "alt": "Camara"
          //         }
          //       },
          //       "type": "scene",
          //       "sceneId": "sala-fotografia",
          //     },
          //   ]
          // },
        // }



        // FIN CONFIG

      });
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


  public actualizarView() {
    console.log(this.viewId);

  }

  // getMuseumUrl(): SafeHtml {
  //   const url = `https://alvdeveloper.com/pannellum?scene=${this.viewId}`;
  //   console.log(url);
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }

}


// let mouseToogle = false

// // WHEN LOAD PANNELLUM
// pannellumViewer.on('mousedown',
//     function (e) {
//         console.log(e);
//         if( mouseToogle ){
//             let a = pannellumViewer.mouseEventToCoords(e);
//             console.log(a);
//         }
//     }
// );

// document.addEventListener('keydown', function(e){
//     if (e.key === 'e'){
//         mouseToogle = !mouseToogle
//         console.log("MouseToogle: ", mouseToogle);
//     }
// })


