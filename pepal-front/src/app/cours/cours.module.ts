import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursDashboardComponent} from './components/cours-dashboard/cours-dashboard.component';
import {CoursDuJour} from './components/cours-du-jour/cours-du-jour.component';
import {CoursRoutingModule} from './cours-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursDashboardComponent,
    CoursDuJour
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    SharedModule
  ]
})
export class CoursModule {
}
