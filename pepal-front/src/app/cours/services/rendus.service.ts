import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rendu } from '../models/rendu';

@Injectable({
  providedIn: 'root'
})
export class RendusService {

  constructor() { }

  getLastRendus(): Observable<Rendu[]> {
    return of([
      {
        id: '1',
        title: 'Hackaton 2021',
        course: 'Hackaton',
        teacher: {
          id: '3',
          nom: 'Biagiotti',
          prenom: 'Laurent'
        },
        deadline: new Date('2021-06-25'),
        files: [
          {
            id: '1',
            name: 'pepal.zip',
            path: 'https://pepal.eu',
            uploadDate: new Date('2021-06-25T08:45:00'),
            description: 'Version de PEPAL améliorée: plus ergonomique, plus concise, permet les téléconférences, ...'
          }
        ]
      }
    ])
  }
}
