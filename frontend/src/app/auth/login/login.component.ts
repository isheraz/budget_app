import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  login() {
    this.authService.login(this.email?.value, this.password?.value).subscribe(data => console.log(data));
  }

  onSubmit(){
    this.authService.login('adnan+2@invozone.com', 'Password1').subscribe(data => console.log(data));
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
