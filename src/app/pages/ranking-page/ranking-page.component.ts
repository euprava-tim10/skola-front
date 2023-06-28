import { Component } from '@angular/core';
import {ContestApplication} from "../../model/ContestApplication";
import {ContestService} from "../../service/contest/contest.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent {
  contestId = 0;
  courseId = 0;

  applications: ContestApplication[] = [];

  constructor(
    private contestService: ContestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contestId = parseInt(params['id']);
      this.courseId = parseInt(params['courseId']);

      this.contestService.getContestApplicationsByCourse(this.contestId, this.courseId).subscribe(a =>
        this.applications = a);

      if (this.courseId == 0) {
        this.contestService.getContestApplications(this.contestId).subscribe(a =>
          this.applications = a);
      }

    });
  }
}
