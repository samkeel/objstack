import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';

const components = [ShellComponent];

const matModules = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,  
  MatDialogModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  ReactiveFormsModule,
  FormsModule,
  LayoutModule
];


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...matModules,
    CommonModule
  ],
  exports: [
    ...components,
    ...matModules
  ]
})
export class SharedModule { }
