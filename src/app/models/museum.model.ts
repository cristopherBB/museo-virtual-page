export class MuseumOverview {
  constructor(
    public id: string,
    public title: string,
    public location: string,
    public featuredImage: string,
    public createdAt: Date,
    public description: string,
  ) { }
}

export const EXAMPLE_MUSEUM_OVERVIEWS = [
  new MuseumOverview(
    '1',
    'Museo Larco',
    'Pueblo Libre, Perú',
    'https://i.pinimg.com/originals/6d/31/de/6d31dea85fc4a2167ec4b6d4f21778fb.jpg',
    new Date(),
    'Rodeado por hermosos jardines, el Museo Larco exhibe más de 5000 años de historia del antiguo Perú.'
  ),
  new MuseumOverview(
    '2',
    'Museo Nacional de la Cultura Peruana',
    'Lima, Perú',
    'https://www.museosdelima.com/wp-content/uploads/2019/07/Museo_Cultura_Peruana-1.jpg',
    new Date(),
    'Se fundó con el propósito de mostrar la continuidad del proceso cultural peruano desde los tiempos prehispánicos hasta nuestros días.'
  ),
  new MuseumOverview(
    '3',
    'Museo de la Nación',
    'Lima, Perú',
    'https://www.museosdelima.com/wp-content/uploads/2019/05/museo_nacion_01.jpg',
    new Date(),
    'El museo de la nación de Lima es catalogado como el mayor conservador del patrimonio del arte peruano.'
  ),
  new MuseumOverview(
    '4',
    'Museo de Arte de Lima',
    'Cercado de Lima, Perú',
    'https://artishockrevista.com/wp-content/uploads/2019/01/MALI.jpg',
    new Date(),
    'El Museo de Arte de Lima es uno de los principales museos del Perú, ubicado en el Paseo Colón, frente al Museo de Arte Italiano, en el distrito de Lima.'
  ),
];
