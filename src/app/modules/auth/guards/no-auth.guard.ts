import {
  CanActivate,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async canActivate() {
    const token = this.authService.getToken();
    if (!token) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
