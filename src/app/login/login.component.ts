import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMsg!: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  onLogin() {
    this.loginService.getLogin(this.loginForm.value).subscribe(
      data => {
        if (data) {
          // pass the login data to BehaviorSubject
          this.router.navigate(['employee']);
        } else {
          this.errorMsg = 'Invalid Credentials...Please try again later';
        }
      }
    );
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [],
      password: []
    });
  }

}
