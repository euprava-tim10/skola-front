import { Component } from '@angular/core';
import {Contest} from "../../model/Contest";
import {ActivatedRoute} from "@angular/router";
import {ContestService} from "../../service/contest/contest.service";

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent {
  contestId = 0;
  isPrimarySchool:boolean = false;
  contest: Contest | undefined = undefined;

  constructor(
    private contestService: ContestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contestId = parseInt(params['id']);

      this.contestService.getContest(this.contestId).subscribe(c => {
        this.contest = c
        this.isPrimarySchool = c.school?.type == 'OSNOVNA'
      });
    });
  }

    protected readonly undefined = undefined;
}
