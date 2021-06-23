import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavItemComponent } from './components/header/nav-item/nav-item.component';
import {RouterModule} from '@angular/router';
import { IntegerDigitsPipe } from './pipes/integer-digits.pipe';
import { HourFormatPipe } from './pipes/hour-format.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NavItemComponent,
    IntegerDigitsPipe,
    HourFormatPipe,
  ],
  exports: [
    HeaderComponent,
    IntegerDigitsPipe,
    HourFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
