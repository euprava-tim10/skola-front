import {Component, OnInit} from '@angular/core';
import {AuthManagerService} from "../../../auth/auth-manager.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  principal: any;
  constructor(private authManagerService: AuthManagerService) { }

  ngOnInit(): void {
    this.principal = this.authManagerService.getPrincipal();
  }

  isLoggedIn() {
    return this.authManagerService.isLoggedIn();
  }

  logout() {
    return this.authManagerService.logoutUserAndRedirect();
  }
}
