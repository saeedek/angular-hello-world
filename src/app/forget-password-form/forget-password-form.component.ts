import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  ChangePasswordValidators } from './change-password.validators';

@Component({
  selector: 'forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.css']
})
export class ForgetPasswordFormComponent {
  form : FormGroup;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      oldPassword : ['',Validators.required,ChangePasswordValidators.shouldBeCorrect],
      newPassword : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    },{
      validators: ChangePasswordValidators.shouldMatch
    })
  }
  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
}
