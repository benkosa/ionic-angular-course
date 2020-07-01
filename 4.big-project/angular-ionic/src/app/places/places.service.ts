import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Manhatan Mansion', 
      'Heart of NY', 
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/residence-belonging-to-jeffrey-epstein-at-east-71st-street-news-photo-1154623802-1562773477.jpg?crop=1.00xw:0.669xh;0,0.178xh&resize=768:*', 
      145
    ),
    new Place(
      'p2', 
      'Valča', 
      'Heart of turiec',
      'https://www.obecvalca.sk/portals_pictures/i_004620/i_4620902.jpg',
      14
    ),
    new Place(
      'p3', 
      'Bambusky', 
      'Only for brave',
      'https://m.smedata.sk/api-media/media/image/sme/9/20/2052339/2052339_800x600.jpeg?rev=3',
      9
    ),
  ];

  getPlaces() {
    return [...this._places];
  }
  constructor() { }
}
