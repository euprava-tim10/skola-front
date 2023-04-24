import {Component, OnInit} from '@angular/core';
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  principal: any;
  constructor(private authManagerService: AuthManagerService) { }

  ngOnInit(): void {
    this.principal = this.authManagerService.getPrincipal();
  }

  isLoggedIn() {
    return this.authManagerService.isLoggedIn();
  }
}
