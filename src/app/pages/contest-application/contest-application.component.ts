import { Component } from '@angular/core';
import {ContestService} from "../../service/contest/contest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contest} from "../../model/Contest";
import {Course} from "../../model/Course";
import {ContestApplication} from "../../model/ContestApplication";
import {CreateContestApplicationDTO} from "../../model/dto/CreateContestApplicationDTO";

@Component({
  selector: 'app-contest-application',
  templateUrl: './contest-application.component.html',
  styleUrls: ['./contest-application.component.css']
})
export class ContestApplicationComponent {
  contestId: number = 0;
  contest: Contest | undefined = undefined;
  isPrimarySchool: boolean = false
  contestApplication: CreateContestApplicationDTO = {
    childLastName: '',
    childFirstName: '',
    childJmbg: '',
    firstWish: undefined
  }

  constructor(
    private contestService: ContestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contestId = parseInt(params['id']);

      this.contestService.getContest(this.contestId).subscribe(c => {
        this.isPrimarySchool = c.school?.type == 'OSNOVNA'
        this.contest = c
        this.contestApplication.firstWish = c.quotas[0].course
      });
    });

  }

  onSetCourse(e: Event) {
    let courseId = Number((e.target as HTMLInputElement).value);
    let quota = this.contest?.quotas?.find(q => q.course?.id == courseId);
    this.contestApplication.firstWish = quota?.course;
  }

  onInputFirstName( e: Event) {
    this.contestApplication.childFirstName = String((e.target as HTMLInputElement).value);
  }

  onInputLastName( e: Event) {
    this.contestApplication.childLastName = String((e.target as HTMLInputElement).value);
  }

  onInputJmbg( e: Event) {
    this.contestApplication.childJmbg = String((e.target as HTMLInputElement).value);
  }

  onApplication() {
    this.contestService.createApplication(this.contestId, this.contestApplication).subscribe(id => {
      this.router.navigateByUrl(`student/contests`);
    });
  }
}
