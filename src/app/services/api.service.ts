import { Injectable } from '@angular/core';
import { EXAMPLE_MUSEUM_OVERVIEWS, MuseumOverview } from '../models/museum.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  /**
   * Fetches a museum and it's details.
   * @param id - Museum ID.
   * @returns {Promise<MuseumOverview>} The museum requested Overview.
   */
  getMuseumDetails = async (id: string): Promise<MuseumOverview> => {
    return new Promise<MuseumOverview>((resolve, reject): void => {
      const museum = EXAMPLE_MUSEUM_OVERVIEWS.find(museum => museum.id === id);
      if (museum) resolve(museum);
      reject('Could not find the museum');
    });
  }
}
