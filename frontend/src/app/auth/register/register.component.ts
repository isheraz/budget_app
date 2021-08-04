import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  minNameLen: number = 6;
  minPasswordLen: number = 8;

  constructor() { }

  /*
  ** Define form fields for the register form
  */
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.minNameLen),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(null),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.minPasswordLen),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
      ]),
    }, {
      validators: PasswordMatchValidator
    });
  }

  /*
  ** Form submit event
  */
  onSubmit(){
    console.log(this.name?.value);
    console.log(this.email?.value);
    console.log(this.password?.value);
    console.log(this.phone?.value);
  }

  /*
  ** Getters to access form control
  */ 
  get name(){ return this.registerForm.get('name'); }

  get email(){ return this.registerForm.get('email'); }

  get password(){ return this.registerForm.get('password'); }

  get phone(){ return this.registerForm.get('phone'); }

}
