import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule)},
  {path: 'room', loadChildren: () => import('./chatroom/chatroom.module').then(m => m.ChatroomModule)},
  {path: '', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
