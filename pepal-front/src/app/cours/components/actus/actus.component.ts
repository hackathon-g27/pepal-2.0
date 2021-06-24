import { Component, OnInit } from '@angular/core';
import { Actu } from '../../models/actu';
import { ActusService } from '../../services/actus.service';

@Component({
  selector: 'app-actus',
  templateUrl: './actus.component.html',
  styleUrls: ['./actus.component.scss']
})
export class ActusComponent implements OnInit {
  actus: Actu[] = [];

  constructor(private actusService: ActusService) { }

  ngOnInit(): void {
    this.actusService.getLastActus().subscribe(actus => this.actus = actus);
  }

}
