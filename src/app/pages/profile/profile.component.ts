import {Component, EventEmitter, Output} from '@angular/core';
import {ContestService} from "../../service/contest/contest.service";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../service/student/student.service";
import {DiplomaResponseDTO} from "../../model/dto/DiplomaResponseDTO";
import {Diploma} from "../../model/Diploma";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  jmbg:number = 0;
  showDiplomaDetails: boolean = false
  errorMessage: string = '';
  error: boolean = false;

  diploma:DiplomaResponseDTO = {
    firstName: '',
    lastName: '',
    jmbg: '',
    schoolName: '',
    schoolType: '',
    course: '',
    gpa: new Map<number, number>,
    date: new Date(),
  }

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jmbg = parseInt(params['jmbg']);
    });
  }

  getPrimarySchoolDiploma() {
    this.showDiplomaDetails = !this.showDiplomaDetails;
    this.studentService.getDiploma(this.jmbg.toString(), "OSNOVNA").subscribe({
      next: (data) => {
        this.diploma = data
      },
      error: () => {
        this.error = !this.error;
        this.errorMessage = "The student does not have a primary school diploma."
      }
    });
  }

  getHighSchoolDiploma() {
    this.showDiplomaDetails = !this.showDiplomaDetails;
    this.studentService.getDiploma(this.jmbg.toString(), "SREDNJA").subscribe({
      next: (data) => {
        this.diploma = data
      },
      error: () => {
        this.error = !this.error;
        this.errorMessage = "The student does not have a high school diploma."
      }
    });
  }
}
