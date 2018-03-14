import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: Todo[];

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.getList();
  }

  getList () {
    this.todoService.getItems().subscribe(response => {
      this.list = response;
    })
  }

}
