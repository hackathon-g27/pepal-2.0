import { Component, OnInit } from '@angular/core';
import { Rendu } from '../../models/rendu';
import { RendusService } from '../../services/rendus.service';

@Component({
  selector: 'app-rendus',
  templateUrl: './rendus.component.html',
  styleUrls: ['./rendus.component.scss']
})
export class RendusComponent implements OnInit {
  rendus: Rendu[];

  constructor(private rendusService: RendusService) { }

  ngOnInit(): void {
    this.rendusService.getLastRendus().subscribe(rendus => this.rendus = rendus);
  }

}
