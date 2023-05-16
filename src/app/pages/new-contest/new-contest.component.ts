import { Component } from '@angular/core';
import {Contest} from "../../model/Contest";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {Router} from "@angular/router";
import {SchoolService} from "../../service/school/school.service";
import {CourseQuota} from "../../model/CourseQuota";

@Component({
  selector: 'app-new-contest',
  templateUrl: './new-contest.component.html',
  styleUrls: ['./new-contest.component.css']
})
export class NewContestComponent {
  principal: any;

  contest: Contest = {
    id: 0,
    school: undefined,
    quotas: [],
    primarySchoolQuota:0,
    text: '',
    startDate:new Date(),
    endDate:new Date()
  }

  minEndDate = new Date(Date.now() + (3600 * 1000 * 24));
  isPrimarySchool:boolean = false;
  error:boolean = false;

  constructor(
    private schoolService: SchoolService,
    private authManagerService: AuthManagerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.schoolService.getSchoolCourses(this.principal.schoolId).subscribe(courses => {
      this.contest.quotas = courses.map(c => {
        let courseQuota: CourseQuota = {
          id: 0,
          quota: 0,
          course: c
        };

        return courseQuota;
      });
    });

    this.schoolService.getById(this.principal.schoolId).subscribe(school => {
      this.isPrimarySchool = school.type == "OSNOVNA";
    })
  }

  onInputQuota(q: CourseQuota, e: Event) {
    q.quota = Number((e.target as HTMLInputElement).value);
  }

  onInputPrimarySchoolQuota( e: Event) {
    this.contest.primarySchoolQuota = Number((e.target as HTMLInputElement).value);
  }

  onInputText( e: Event) {
    this.contest.text = String((e.target as HTMLInputElement).value);
  }

  onInputStartDate(e: Event) {
    this.contest.startDate = new Date((e.target as HTMLInputElement).value);
  }

  onInputEndDate(e: Event) {
    this.contest.endDate = new Date((e.target as HTMLInputElement).value);
  }

  onCreateContest() {
    if (this.contest.startDate.toISOString() > this.contest.endDate.toISOString()) {
      this.error = true;
      return
    }
    this.schoolService.createContest(this.principal.schoolId, this.contest).subscribe(contest => {
      this.router.navigateByUrl('/admin/contests');
    });
  }
}
