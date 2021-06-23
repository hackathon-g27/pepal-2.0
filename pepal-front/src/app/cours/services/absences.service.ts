import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Absence } from '../models/absence';

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  constructor() { }

  getLastAbsences(): Observable<Absence[]> {
    return of([
      {
        id: '1',
        date: '23/06/2021',
        type: 'absence',
        course: {
          id: '1',
          label: 'Test',
          from: new Date('2021-06-23T08:45:00'),
          to: new Date('2021-06-23T11:45:00'),
          intervenant: {
            id: '1',
            nom: "Quelqu'un",
            prenom: "Truc"
          },
          classe: {
            id: '1',
            label: ''
          }
        },
        duration: 180,
        isJustified: false
      },
      {
        id: '2',
        date: '22/06/2021',
        type: 'retard',
        course: {
          id: '6',
          label: 'Test2',
          from: new Date('2021-06-22T08:45:00'),
          to: new Date('2021-06-22T11:45:00'),
          intervenant: {
            id: '1',
            nom: "Quelqu'un",
            prenom: "Truc"
          },
          classe: {
            id: '1',
            label: ''
          }
        },
        duration: 26,
        isJustified: true
      },
    ]);
  }
}
