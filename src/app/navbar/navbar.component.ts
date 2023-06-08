import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'EPortal';
  username!: string;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onLogout() {
    this.username = "";
    // pass the observable value of undefined to BehaviorSubject
    this.loginService.loginStatus = false;
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    // get username subscribed from BehaviorSubject
    console.log();
    
  }

}
