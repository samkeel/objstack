import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuard } from './pages/user/auth.guard';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'organise',
    loadChildren: () => import('./pages/organise/organise.module').then(m => m.OrganiseModule)
    , canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
