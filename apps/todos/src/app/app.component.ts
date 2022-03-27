import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Todo } from '@locdt/data';

@Component({
  selector: 'locdt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }

}
