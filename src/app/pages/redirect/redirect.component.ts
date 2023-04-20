import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {

  constructor(
    private route: ActivatedRoute,
    private authManagerService: AuthManagerService
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if(fragment) {
        let params = new URLSearchParams(fragment);
        let token = params.get("access_token");

        if(token)
          this.authManagerService.loginUserAndRedirect(token);
      }
    });
  }
}
