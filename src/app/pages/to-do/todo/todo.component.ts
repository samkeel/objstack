import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../organise/service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
