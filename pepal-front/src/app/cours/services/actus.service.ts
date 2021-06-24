import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actu } from '../models/actu';

@Injectable({
  providedIn: 'root'
})
export class ActusService {
  actus: Actu[] = [
    {
      id: '1',
      title: 'Nouvelle version de PEPAL',
      content: 'La version 2.0 de PEPAL est arrivée !'
    }
  ];

  constructor() { }

  getLastActus(): Observable<Actu[]> {
    return of(this.actus);
  }
}
