export let config = {
    "escenas":[
        {
            "id":"pasillo-1",
            "titulo":"Pasillo 1",
            "img-360":"/assets/titles/hacienda/pasillo-1/pasillo-1-4x-qudratic.jpg",
            "cantidad_hotspots":2,
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 200,
                    "titulo": "Pasillo 2",
                    "id_escena": "pasillo-2",
                    "id_hotspot": "hotspot-escena-pasillo-1-pasillo-2"
                },
                {
                    "valor_angulo_y": 0,
                    "valor_angulo_x": 155,
                    "titulo":"	Miguel Grau",
                    "id_hotspot": "hotspot-miguel-grau",
                    "icono":"/assets/images/mapa-pasillo-1.jpg",
                    "ancho_icono": 120,
                    "altura_icono": 160,
                    "attr_alt":"Galeria",
                    "clase_css":"custom-hotspot-icon custom-img",
                    "id_obra": "m01_s03-04_078",
                    "mostrar_modal":"db",
                    // "titulo_modal":"Mapa Cuchi EJEMPLO",
                    // "descripcion_modal":"Mapa completo de la Hacienda.",
                    "imagen_modal":"/assets/images/mapa-pasillo-1.jpg",
                    "ancho_imagen": 600,
                    "altura_imagen": 600
                }
            ]
        },
        {
            "id":"pasillo-2",
            "titulo":"Pasillo 2",
            "img-360":"/assets/titles/hacienda/pasillo-2.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 205,
                    "titulo": "Pasillo 3",
                    "id_escena": "pasillo-3",
                    "id_hotspot": "hotspot-escena-pasillo-2-pasillo-3"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 40,
                    "titulo": "Pasillo 1",
                    "id_escena": "pasillo-1",
                    "id_hotspot": "hotspot-escena-pasillo-2-pasillo-1" 
                }
            ]
        },
        {
            "id":"pasillo-3",
            "titulo":"Pasillo 3",
            "img-360":"/assets/titles/hacienda/pasillo-3.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 90,
                    "titulo": "Pasillo 4",
                    "id_escena": "pasillo-4",
                    "id_hotspot": "hotspot-escena-pasillo-3-pasillo-4"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": -90,
                    "titulo": "Pasillo 2",
                    "id_escena": "pasillo-2",
                    "id_hotspot": "hotspot-escena-pasillo-3-pasillo-2" 
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 0,
                    "valor_angulo_x": 0,
                    "titulo": "Sala de Secado 2",
                    "id_escena": "sala-2",
                    "id_hotspot": "hotspot-escena-pasillo-3-sala-2" 
                }
            ]
        },
        {
            "id":"sala-2",
            "titulo":"Sala de Secado 2",
            "img-360":"/assets/titles/hacienda/sala-2/sala-2_digital_art_x4.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": -8,
                    "valor_angulo_x": 200,
                    "titulo": "Pasillo 3",
                    "id_escena": "pasillo-3",
                    "id_hotspot": "hotspot-escena-sala-2-pasillo-3"
                },
                {
                    "valor_angulo_y": -4,
                    "valor_angulo_x": 360,
                    "titulo":"Caraotas - Jorge Pedro Nuñez",
                    "id_hotspot": "hotspot-obra-1-sala-2-img",
                    "icono":"/assets/titles/hacienda/sala-2/obras/obra-1.jpg",
                    "ancho_icono": 400,
                    "altura_icono": 200,
                    "attr_alt":"Caraotas - Jorge Pedro Nuñez",
                    "mostrar_modal":"local",
                    "clase_css":"custom-hotspot-icon custom-img",
                    "titulo_modal":"Caraotas- Jorge Pedro Nuñez",
                    "descripcion_modal":"La prática artística de Jorge Pedro Nuñez está ligada a su experiencia como historiador del arte, debido a lo que sus obras aluden a múltiples referencias, tanto artísticas como contextuales",
                    "imagen_modal":"/assets/titles/hacienda/sala-2/obras/obra-1.jpg",
                    "ancho_imagen": 600,
                    "altura_imagen": 400
                },
                {
                    "valor_angulo_y": -4,
                    "valor_angulo_x": 110,
                    "titulo":"NOMBRE OBRA 2",
                    "id_hotspot": "hotspot-obra-2-sala-2-img",
                    "icono":"/assets/titles/hacienda/sala-2/obras/obra-2.jpg",
                    "ancho_icono": 400,
                    "altura_icono": 200,
                    "attr_alt":"NOMBRE OBRA 2",
                    "clase_css":"custom-hotspot-icon custom-img"
                },
                {
                    "valor_angulo_y": -4,
                    "valor_angulo_x": 230,
                    "titulo":"NOMBRE OBRA 3",
                    "id_hotspot": "hotspot-obra-3-sala-2-img",
                    "icono":"/assets/titles/hacienda/sala-2/obras/obra-3.jpg",
                    "ancho_icono": 400,
                    "altura_icono": 200,
                    "attr_alt":"NOMBRE OBRA 3",
                    "clase_css":"custom-hotspot-icon custom-img"
                }
            ]
        },
        {
            "id": "pasillo-4",
            "titulo": "Pasillo 4",
            "img-360": "/assets/titles/hacienda/pasillo-4.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 90,
                    "titulo": "Pasillo 5",
                    "id_escena": "pasillo-5",
                    "id_hotspot": "hotspot-escena-pasillo-4-pasillo-5"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": -90,
                    "titulo": "Pasillo 3",
                    "id_escena": "pasillo-3",
                    "id_hotspot": "hotspot-escena-pasillo-4-pasillo-3"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 0,
                    "valor_angulo_x": 0,
                    "titulo": "Sala de Secado 3",
                    "id_escena": "sala-3",
                    "id_hotspot": "hotspot-escena-pasillo-4-sala-3" 
                }
            ]
        },
        {
            "id":"pasillo-5",
            "titulo":"Pasillo 5",
            "img-360":"/assets/titles/hacienda/pasillo-5.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 90,
                    "titulo": "Pasillo 6",
                    "id_escena": "pasillo-6",
                    "id_hotspot": "hotspot-escena-pasillo-5-pasillo-6"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": -90,
                    "titulo": "Pasillo 4",
                    "id_escena": "pasillo-4",
                    "id_hotspot": "hotspot-escena-pasillo-5-pasillo-4" 
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 0,
                    "valor_angulo_x": 0,
                    "titulo": "Tienda de Chocolate",
                    "id_escena": "tienda-chocolate",
                    "id_hotspot": "hotspot-escena-pasillo-5-tienda-chocolate" 
                }
            ]
        },
        {
            "id": "tienda-chocolate",
            "titulo": "Tienda de Chocolate",
            "img-360": "assets/titles/hacienda/cacao/cacao_photos_v2_faces_x4_toned.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": -3,
                    "valor_angulo_x": -15,
                    "titulo": "Pasillo 5",
                    "id_escena": "pasillo-5",
                    "id_hotspot": "hotspot-escena-tienda-chocolate-pasillo-5"
                }
            ]
        },
        {
            "id":"pasillo-6",
            "titulo":"Pasillo 6",
            "img-360": "/assets/titles/hacienda/pasillo-6.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": 90,
                    "titulo": "Pasillo 7",
                    "id_escena": "pasillo-7",
                    "id_hotspot": "hotspot-escena-pasillo-6-pasillo-7"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": -90,
                    "titulo": "Pasillo 5",
                    "id_escena": "pasillo-5",
                    "id_hotspot": "hotspot-escena-pasillo-6-pasillo-5"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 0,
                    "valor_angulo_x": 110,
                    "titulo": "Sala de Curso de Fotografia",
                    "id_escena": "sala-fotografia",
                    "id_hotspot": "hotspot-escena-pasillo-6-sala-fotografia"
                }
            ]
        },
        {
            "id": "sala-fotografia",
            "titulo": "Sala de Curso Fotografia",
            "img-360": "/assets/titles/hacienda/fotoclase.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": -3,
                    "valor_angulo_x": 290,
                    "titulo": "Pasillo 6",
                    "id_escena": "pasillo-6",
                    "id_hotspot": "hotspot-escena-sala-fotografia-pasillo-6"
                }
            ]
        },
        {
            "id": "pasillo-7",
            "titulo": "Pasillo 7",
            "img-360": "/assets/titles/hacienda/pasillo-final.jpg",
            "hotspots":[
                {
                    "tipo":"scene",
                    "valor_angulo_y": 1,
                    "valor_angulo_x": -90,
                    "titulo": "Pasillo 6",
                    "id_escena": "pasillo-6",
                    "id_hotspot": "hotspot-escena-pasillo-7-pasillo-6"
                },
                {
                    "tipo":"scene",
                    "valor_angulo_y": 0,
                    "valor_angulo_x": 210,
                    "titulo": "Sala de Curso de Fotografia",
                    "id_escena": "sala-fotografia",
                    "id_hotspot": "hotspot-escena-pasillo-7-pasillo-6"
                }
            ]
        }
    ]
};