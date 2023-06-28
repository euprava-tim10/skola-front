import {Component, EventEmitter, Output} from '@angular/core';
import {Contest} from "../../model/Contest";
import {ContestService} from "../../service/contest/contest.service";

@Component({
  selector: 'app-student-contests',
  templateUrl: './student-contests.component.html',
  styleUrls: ['./student-contests.component.css']
})
export class StudentContestsComponent {

  contests: Contest[] = [];

  constructor(
    private contestService: ContestService
  ) {}

  ngOnInit() {
    this.contestService.getActiveContests().subscribe(c => this.contests = c);
  }

    protected readonly undefined = undefined;
}
