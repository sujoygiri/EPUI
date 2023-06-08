import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of} from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private loginService:LoginService) { }

  canActivate(): boolean | Observable<boolean> {
    // based on loginStatus of loginService guard the components
    if (this.loginService.loginStatus) {
      return of(false);
    }
    return of(true);
  }
}
