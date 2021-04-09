import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  MuseumOverview } from '../models/museum.model';
import { Observable } from 'rxjs';
import { Artifact } from '../models/artifact.model';

export interface MuseumsResponse {
  ok: boolean,
  result: MuseumOverview[],
}

export interface MuseumArtifactsResponse {
  ok: boolean,
  result: Artifact[],
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Fetches a museum and it's details.
   * @param label - Museum identifier.
   * @returns {Observable<MuseumArtifactsResponse>} The museum requested Overview.
   */
  getMuseumDetails = (label: string): Observable<MuseumArtifactsResponse> => {
    const url = environment.apiUrl + `/artifacts/?museum="${label}"`;
    return this.http.get<MuseumArtifactsResponse>(url);
  };

  /**
   * Fetches all museums overview.
   * @returns {Observable<MuseumsResponse>} A list with all the museums.
   */
  getMuseums = (): Observable<MuseumsResponse> => {
    const url = environment.apiUrl + '/museums';
    return this.http.get<MuseumsResponse>(url);
  };

  /**
   * Executes an http get request.
   * @param url - The url to get from.
   * @param headers - Optional headers for the http request.
   * @returns {Observable<T>} An observable of the generic defined type.
   */
  get = <T extends unknown>(url: string, headers?: HttpHeaders): Observable<T> => {
    const options = headers ? { headers } : undefined;
    return this.http.get<T>(url, options);
  };
}
