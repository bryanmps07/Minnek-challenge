import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSignupComponent } from './pages/auth-signup/auth-signup.component';
import { AuthSigninComponent } from './pages/auth-signin/auth-signin.component';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: AuthSignupComponent,
    // canActivate: [NoAuthGuard],
  },
  {
    path: 'signin',
    component: AuthSigninComponent,
    // canActivate: [NoAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
