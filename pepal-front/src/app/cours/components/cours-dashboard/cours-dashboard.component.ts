import { Component, OnInit } from '@angular/core';
import {CoursService} from '../../services/cours.service';

@Component({
  selector: 'app-cours-dashboard',
  templateUrl: './cours-dashboard.component.html',
  styleUrls: ['./cours-dashboard.component.scss']
})
export class CoursDashboardComponent implements OnInit {

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
  }

}
