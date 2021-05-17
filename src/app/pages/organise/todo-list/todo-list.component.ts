import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { toDoModel } from '../model/todo.model';
import { TodoService } from '../service/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../dialogs/todo-dialog.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: toDoModel[] = [];
  sub!: Subscription;

  constructor(
    public todoService: TodoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sub = this.todoService
      .getUserToDos()
      .subscribe(todos => (this.todos = todos));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  openBoardDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '80vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(result)
        this.todoService.createTodo({
          title: result.title,
          description: result.description,
          priority: this.todos.length
        });
      }
    })
  }

}
