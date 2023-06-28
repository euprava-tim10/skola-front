import { Component } from '@angular/core';
import {Contest} from "../../model/Contest";
import {SchoolService} from "../../service/school/school.service";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {ContestService} from "../../service/contest/contest.service";

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
    private authManagerService: AuthManagerService,
    private contestService: ContestService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();
    this.schoolService.getSchoolContests(this.principal.schoolId).subscribe(c => this.contests = c);
  }

  onCloseContest(contest: Contest) {
    const btn = document.getElementById('closeBtn') as HTMLInputElement | null;
    this.contestService.closeContest(contest.id).subscribe(x => {
      btn?.setAttribute('disabled', '');
      contest.contestStatus = 'ZATVOREN';
    });
  }
}
