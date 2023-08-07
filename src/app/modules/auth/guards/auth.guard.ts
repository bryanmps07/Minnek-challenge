import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.validate(state);
  }

  canActivateChild(
    state: RouterStateSnapshot
  ) {
    return this.validate(state);
  }

  private async validate(state: RouterStateSnapshot) {
    const token = this.authService.getToken();
    if (!token) {
      this.authService.logout();
      this.router.navigate(['/auth/signin'])
      return false;
    }
   
    return true;
  }
}



