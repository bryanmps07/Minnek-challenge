
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response, Token, ValidateToken, ValidateTokenRequest } from './interfaces';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

const endpoint = `${environment.apiUrl}/auth`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'accessToken';

  constructor(
    private http: HttpClient
  ) { }

  login(loginRequest: any): Observable<Token> {
    return this.http.post<Token>(`${endpoint}/signin`, loginRequest);
  }

  isAuthenticated(token: ValidateTokenRequest): Observable<Response<ValidateToken>> {
    return this.http.post<Response<ValidateToken>>(`${endpoint}/token/validate`, token);
  }

  // Getter and setters from localstorage
  // -----------------------------------------------------------------------------------------------------

  getToken(): string {
    const token = localStorage.getItem(this.JWT_TOKEN);
    return token !== null ? JSON.parse(token) : null;
  }

  setToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, JSON.stringify(token));
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

}
