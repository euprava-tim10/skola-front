import {Component, OnInit} from '@angular/core';
import {AuthManagerService} from "../../../auth/auth-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
  constructor(
    private authManagerService: AuthManagerService,
    private router: Router
  ) { }

  isLoggedIn() {
    return this.authManagerService.isLoggedIn();
  }

  isStudent() {
    return this.authManagerService.isStudent();
  }

  logout() {
    return this.authManagerService.logoutUserAndRedirect();
  }
  onClickMyProfile(): void {
    this.router.navigate(["/profile", this.authManagerService.getUserJmbg()]);
  }
}
