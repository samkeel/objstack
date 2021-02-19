import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisePageComponent } from './organise-page/organise-page.component';

const routes: Routes = [
  {
    path: '', component: OrganisePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganiseRoutingModule { }
