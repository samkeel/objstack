import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatDialogModule
];


@NgModule({
  declarations: [],
  imports: [...matModules,
    CommonModule
  ],
  exports: [...matModules]
})
export class SharedModule { }
