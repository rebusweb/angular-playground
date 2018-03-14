import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InteractionComponent }   from './interaction/interaction.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/interaction', pathMatch: 'full' },
  { path: 'interaction', component: InteractionComponent },
  { path: 'todo', component: TodoListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}