import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:UserService,private router:Router){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggedIn = this.service.UserLoggedIn();
    if(loggedIn)
      return true;
    else
     {
       this.router.navigate(['/login']);
        return false;
    }

      return true;
  }
  
}
