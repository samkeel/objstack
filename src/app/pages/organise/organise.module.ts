import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganiseRoutingModule } from './organise-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganisePageComponent } from './organise-page/organise-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TodoDialogComponent } from './dialogs/todo-dialog.component';


@NgModule({
  declarations: [OrganisePageComponent, TodoListComponent, TodoComponent, TodoDialogComponent],
  imports: [
    CommonModule,
    OrganiseRoutingModule,
    SharedModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [TodoDialogComponent]
})
export class OrganiseModule { }
