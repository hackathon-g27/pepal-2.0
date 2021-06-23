import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavItemComponent } from './components/header/nav-item/nav-item.component';
import {RouterModule} from '@angular/router';
import { IntegerDigitsPipe } from './pipes/integer-digits.pipe';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NavItemComponent,
    IntegerDigitsPipe,
    DurationPipe,
  ],
  exports: [
    HeaderComponent,
    IntegerDigitsPipe,
    DurationPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
