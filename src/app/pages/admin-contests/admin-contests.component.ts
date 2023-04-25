import { Component } from '@angular/core';
import {Contest} from "../../model/Contest";
import {SchoolService} from "../../service/school/school.service";
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-admin-contests',
  templateUrl: './admin-contests.component.html',
  styleUrls: ['./admin-contests.component.css']
})
export class AdminContestsComponent {
  principal: any;

  contests: Contest[] = [];

  constructor(
    private schoolService: SchoolService,
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.schoolService.getSchoolContests(this.principal.schoolId).subscribe(c => this.contests = c);
  }
}
