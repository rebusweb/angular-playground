import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient ) { }

  getItems (): Observable<Todo[]> {
    // get response and format it
    return this.http.get<any[]>('http://rebus.home.pl/todo.json.php')
      .pipe(
        map(response => {
          let items: Todo[] = [];
          for(let item of response) {
            items.push({
              what: item.what,
              when: item.when,
              done: (item.done == '1'),
            })
          }
          return items;
        })
      );
    // simple assignment
    // return this.http.get<Todo[]>('http://rebus.home.pl/todo.json.php');
  }

}
