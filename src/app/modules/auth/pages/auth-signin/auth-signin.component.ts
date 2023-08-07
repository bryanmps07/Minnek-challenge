import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {
  public signInForm: FormGroup;
  public busy = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router 
  ) {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.busy = true;
    if (this.signInForm.valid) {
      this.authService.login(this.signInForm.value).pipe().subscribe(
        ({ accessToken }) => {
          console.log(accessToken);
          
          this.authService.setToken(accessToken);
          this.router.navigate(['products']).then();
          this.busy = false;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.busy = false;
        }
      );
    }
  }


}
