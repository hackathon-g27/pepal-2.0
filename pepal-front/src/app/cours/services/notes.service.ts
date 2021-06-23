import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getLastNotes(): Observable<Note[]> {
    return of([{
      id: '1',
      value: 20,
      coefficient: 2.0,
      course: 'Mathématiques',
      date: new Date()
    },
    {
      id: '2',
      value: 12,
      coefficient: 6.0,
      course: 'Connaissance de soi',
      date: new Date('2020-09-29')
    }
  ]);
  }
}
