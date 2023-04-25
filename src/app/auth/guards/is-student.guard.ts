import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthManagerService} from "../auth-manager.service";

@Injectable({
  providedIn: 'root'
})
export class IsStudentGuard implements CanActivate {

  constructor(
    private authManagerService: AuthManagerService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authManagerService.isStudent())
      return true;

    return this.router.parseUrl('/home');
  }

}
