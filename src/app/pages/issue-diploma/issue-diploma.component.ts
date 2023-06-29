import { Component } from '@angular/core';
import {ContestApplication} from "../../model/ContestApplication";
import {ContestService} from "../../service/contest/contest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {SchoolService} from "../../service/school/school.service";
import {StudentService} from "../../service/student/student.service";
import {School} from "../../model/School";
import {StudentGPA} from "../../model/dto/StudentGPA";
import {AbstractControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-issue-diploma',
  templateUrl: './issue-diploma.component.html',
  styleUrls: ['./issue-diploma.component.css']
})
export class IssueDiplomaComponent {
  jmbg = '';
  principal: any;
  diploma: boolean = false;
  profession: string = 'OTHER';
  gpaForm = this.fb.group({
    1: [""],
    2: [""],
    3: [""],
    4: [""]
  });

  studentGPA: StudentGPA = {
    jmbg: '',
    gpa: {},
    profession:''
  }
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private schoolService: SchoolService,
    private authManagerService: AuthManagerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();
    this.route.params.subscribe(params => {
      this.jmbg = params['jmbg'];
    });

    this.schoolService.getById(this.principal!!.schoolId).subscribe(s => {
      this.studentService.getDiploma(this.jmbg, s.type).subscribe(d => {
        this.diploma = true;
      }, (error) => {
        this.diploma = false;
      });
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.gpaForm.controls;
  }

  setProfession(profession :string){
    this.profession = profession;
  }

  onIssue() {
    const keys: string[] = Object.keys(this.gpaForm.controls)
    let gpaMap: Record<string, any> = {};
    for (const key of keys) {
      // @ts-ignore
      gpaMap[key] = this.gpaForm.controls[key].value;
    }

    this.studentGPA.jmbg = this.jmbg;
    this.studentGPA.gpa = gpaMap;
    this.studentGPA.profession = this.profession;

    this.studentService.issueDiploma(this.studentGPA).subscribe(d => {
      this.router.navigateByUrl('/admin/students')
    });
  }
}
