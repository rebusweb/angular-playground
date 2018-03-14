import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
