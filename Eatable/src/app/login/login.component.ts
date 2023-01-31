import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = 'test1@mail.com';
  password: string = '';
  route: any;
  authService: any;

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: { [x: string]: string; }) => {
          console.log(params); // { order: "popular" }
          this.email = params['email']
        }
      );
  }

  async login() {

    const response = await this.authService.doLogin(this.email, this.password)
    console.log({response})
  }

}




