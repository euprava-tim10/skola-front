import { Component } from '@angular/core';
import {Student} from "../../model/Student";
import {SchoolService} from "../../service/school/school.service";
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent {
  principal: any;

  studenti: Student[] = [];

  constructor(
    private schoolService: SchoolService,
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.schoolService.getSchoolStudents(this.principal!!.schoolId).subscribe(s => this.studenti = s);
  }
}
