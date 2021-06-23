import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursDashboardComponent} from './components/cours-dashboard/cours-dashboard.component';
import {CoursDuJour} from './components/cours-du-jour/cours-du-jour.component';

const routes: Routes = [{
 path: '', component: CoursDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CoursRoutingModule { }
