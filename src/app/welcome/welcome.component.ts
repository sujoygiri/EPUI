import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username!: string;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // subscribe the login values from BehaviorSubject
    console.log();
    
  }

}
