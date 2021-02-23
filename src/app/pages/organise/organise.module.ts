import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganiseRoutingModule } from './organise-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganisePageComponent } from './organise-page/organise-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [OrganisePageComponent, TodoListComponent, TodoComponent],
  imports: [
    CommonModule,
    OrganiseRoutingModule,
    SharedModule
  ]
})
export class OrganiseModule { }
