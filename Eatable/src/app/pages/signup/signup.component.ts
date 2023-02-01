import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Credentials } from '../../models/credentials.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.signup(<Credentials>this.loginForm.value);
  }
}
