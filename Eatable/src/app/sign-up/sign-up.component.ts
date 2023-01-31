import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  [x: string]: any;

  email: string | undefined;
  password: string | undefined;
  confirm_password: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  phone: string | undefined;  
  

  async register() {
    if(this.password !== this.confirm_password){
      alert('Las contraseñas no son iguales')
      return
    }
    const user = {
      "email": this.email,
      "password": this.password,
      "first_name": this.first_name,
      "last_name": this.last_name,
      "phone": this.phone
    }
    console.log({user});
    console.log({Response})
  }
}


