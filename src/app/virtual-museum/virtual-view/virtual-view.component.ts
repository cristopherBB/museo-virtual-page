import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';
import { config } from './config'
import { ModalComponent } from '../modal/modal.component';
import { ApiService } from 'src/app/services/api.service';

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
    public dialog: MatDialog,
    public apiServive: ApiService
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
                // 'createTooltipFunc': this.hotspot.bind(this),
                // 'createTooltipArgs': {
                //   'title': hotspot['titulo'],
                //   'id': hotspot['id_hotspot'],
                //   'customIcon': {
                //     'src': hotspot['icono'] || null,
                //     'alt': hotspot['attr_alt'] || null,
                //     'width': hotspot['ancho_icono'] || null,
                //     'height': hotspot['altura_icono'] || null,
                //   }
                // }
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
                  // 'modal': {
                  //   'title': hotspot['titulo_modal'] || null,
                  //   'description': hotspot['descripcion_modal'] || null,
                  //   'imagen': {
                  //     'src': hotspot['imagen_modal'] || null,
                  //     'alt': hotspot['attr_alt'] || null,
                  //     'width': hotspot['ancho_imagen'] || null,
                  //     'height': hotspot['altura_imagen'] || null,
                  //   }
                  // }
                }
              }
              console.log("Mostrar modal");
              console.log(hotspot['mostrar_modal']);
              
              if(hotspot['mostrar_modal']=='local'){
                aux.createTooltipArgs.modal = {
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
                this.apiServive.getArtefact(hotspot['id_obra']).subscribe(
                  data =>{
                    console.log(data);
                    aux.createTooltipArgs.modal = {
                      'title': data.result[0].artifactLabel.value || null,
                      'description': data.result[0].note.value || null,
                      'imagen': {
                        'src': hotspot['imagen_modal'] || null,
                        'alt': hotspot['attr_alt'] || null,
                        'width': hotspot['ancho_imagen'] || null,
                        'height': hotspot['altura_imagen'] || null,
                      }
                  }
                    
                  }
                );
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





