import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteSettingsRoutingModule } from './site-settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';


@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    SiteSettingsRoutingModule,
    SharedModule
  ]
})
export class SiteSettingsModule { }
