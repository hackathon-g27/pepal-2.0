import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { RoomComponent } from './components/room/room.component';
import {ChatroomRoutingModule} from './chatroom-routing.module';


@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule,
    ChatroomRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChatroomModule {
}
