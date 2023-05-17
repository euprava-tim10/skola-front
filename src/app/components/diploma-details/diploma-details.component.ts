import {Component, Input} from '@angular/core';
import {DiplomaResponseDTO} from "../../model/dto/DiplomaResponseDTO";

@Component({
  selector: 'app-diploma-details',
  templateUrl: './diploma-details.component.html',
  styleUrls: ['./diploma-details.component.css']
})
export class DiplomaDetailsComponent {

  @Input()
  errorMessage: string = '';

  @Input()
  error: boolean = false;

  @Input()
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
}
