import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppelContexteService {

  private appelOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  observeAppel(): Observable<boolean> {
    return this.appelOpen.asObservable();
  }

  toggleAppel(): void {
    this.appelOpen.next(!this.appelOpen.value);
  }
}
