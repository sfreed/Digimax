import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public newUser = false;
  public signup: boolean;
  public loginForm: FormGroup;
  public registrationForm: FormGroup;
  site:  string;

  public formErrors: FormErrors = {
    email: '',
    password: '',
  };

  public errorMessage: any;

  constructor(public authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
      const url = this.route.snapshot.url;

      this.site = this.route.snapshot.queryParamMap.get('site');

      if (url[0].path === 'simple-login') {
        this.signup = false;
      }

      this.registrationForm = this.fb.group({
        mobileNumber: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      });

      this.loginForm = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }

  public toggle() {
    this.signup = !this.signup;
  }

  login(l: any) {
    this.authService.signInWithEmailAndPassword(l.email, l.password, this.site);
  }
}
