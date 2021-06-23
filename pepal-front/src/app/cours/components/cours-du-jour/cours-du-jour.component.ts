import { Component, OnInit } from '@angular/core';
import {Cours} from '../../models/cours';
import {CoursService} from '../../services/cours.service';

@Component({
  selector: 'app-card-next',
  templateUrl: './cours-du-jour.component.html',
  styleUrls: ['./cours-du-jour.component.scss']
})
export class CoursDuJour implements OnInit {

  cours: Cours[];

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.coursService.getCoursDuJour().subscribe(cours => {
      this.cours = cours;
    });
  }

}
