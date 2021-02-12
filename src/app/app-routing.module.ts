import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: 'login', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'settings', loadChildren: () => import('./pages/site-settings/site-settings.module').then(m => m.SiteSettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
