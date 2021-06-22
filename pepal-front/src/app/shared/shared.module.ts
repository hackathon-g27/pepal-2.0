import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavItemComponent } from './components/header/nav-item/nav-item.component';



@NgModule({
    declarations: [
        HeaderComponent,
        NavItemComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
