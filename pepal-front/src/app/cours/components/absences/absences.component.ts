import { Component, OnInit } from '@angular/core';
import { Absence } from '../../models/absence';
import { AbsencesService } from '../../services/absences.service';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {
  absences: Absence[];

  constructor(private absenceService: AbsencesService) { }

  ngOnInit(): void {
    this.absenceService.getLastAbsences().subscribe(absences => this.absences = absences);
  }

}
