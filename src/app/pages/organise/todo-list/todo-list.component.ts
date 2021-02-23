import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { toDoModel } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: toDoModel[] = [];
  sub: Subscription | undefined;

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.sub = this.todoService
    .getUserToDos()
    .subscribe(todos => (this.todos = todos));
  }

}
