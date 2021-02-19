import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganiseRoutingModule } from './organise-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganisePageComponent } from './organise-page/organise-page.component';


@NgModule({
  declarations: [OrganisePageComponent],
  imports: [
    CommonModule,
    OrganiseRoutingModule,
    SharedModule
  ]
})
export class OrganiseModule { }
