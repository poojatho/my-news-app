import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full',
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path: 'favourite',
    component: FavouriteComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
