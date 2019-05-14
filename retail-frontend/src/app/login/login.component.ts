import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { HttpClient ,HttpParams } from '@angular/common/http';
import {ShopService} from "../shop-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ShopService ,private http : HttpClient) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

  if(this.apiService.login(loginPayload)){
    var token
    = window.btoa(loginPayload.username + ':' + loginPayload.password);
  var userData = {
      userName: loginPayload.username,
      authData: token
  }
  window.sessionStorage.setItem(
    'userData', JSON.stringify(userData)
  );
  
  
    }
      else {
        this.invalidLogin = true;
        
      }
    }
  

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
