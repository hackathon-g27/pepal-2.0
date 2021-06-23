import {Injectable} from '@angular/core';
import {Cours} from '../models/cours';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor() {
  }

  getCoursDuJour(): Observable<Cours[]> {
    const today = new Date();
    return of([{
      label: 'Angular',
      from: new Date(today.getFullYear(), today.getMonth(), today.getDay(), 9, 0, 0),
      to: new Date(today.getFullYear(), today.getMonth(), today.getDay(), 12, 30, 0),
      intervenant: {nom: 'Thornton', prenom: 'Jacob'},
      classe: {label: ''},
    }, {
      label: 'Angular',
      from: new Date(today.getFullYear(), today.getMonth(), today.getDay(), 13, 30, 0),
      to: new Date(today.getFullYear(), today.getMonth(), today.getDay(), 17, 0, 0),
      intervenant: {nom: 'Thornton', prenom: 'Jacob'},
      classe: {label: ''},
    }]);
  }
}
