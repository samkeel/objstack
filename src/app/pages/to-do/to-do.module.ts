import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ToDoPageComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    SharedModule
  ]
})
export class ToDoModule { }
