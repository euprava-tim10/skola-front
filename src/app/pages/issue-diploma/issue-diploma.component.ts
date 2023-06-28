import { Component } from '@angular/core';
import {ContestApplication} from "../../model/ContestApplication";
import {ContestService} from "../../service/contest/contest.service";
import {ActivatedRoute} from "@angular/router";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {SchoolService} from "../../service/school/school.service";
import {StudentService} from "../../service/student/student.service";
import {School} from "../../model/School";
import {StudentGPA} from "../../model/dto/StudentGPA";

@Component({
  selector: 'app-issue-diploma',
  templateUrl: './issue-diploma.component.html',
  styleUrls: ['./issue-diploma.component.css']
})
export class IssueDiplomaComponent {
  jmbg = '';
  principal: any;
  diploma: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private schoolService: SchoolService,
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();
    this.route.params.subscribe(params => {
      this.jmbg = params['jmbg'];
    });

    this.schoolService.getById(this.principal!!.schoolId).subscribe(s => {
      this.studentService.getDiploma(this.principal!!.jmbg, s.type).subscribe(d => {
        this.diploma = true;
      }, (error) => {
        this.diploma = false;
      });
    });
  }

  onInputFirst( e: Event) {
    Number((e.target as HTMLInputElement).value);
  }
  onInputSecond( e: Event) {
    Number((e.target as HTMLInputElement).value);
  }
  onInputThird( e: Event) {
    Number((e.target as HTMLInputElement).value);
  }
  onInputFourth( e: Event) {
    Number((e.target as HTMLInputElement).value);
  }

  onIssue() {

  }
}
