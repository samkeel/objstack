import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

const components = [ShellComponent, HomePageComponent];

const matModules = [
  CommonModule,
  RouterModule,
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
  MatInputModule,
  LayoutModule,
  MatGridListModule,
  MatCardModule,
  MatSnackBarModule,
  MatTabsModule
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
