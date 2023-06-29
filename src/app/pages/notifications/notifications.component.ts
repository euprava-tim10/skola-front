import { Component } from '@angular/core';
import {DiplomaResponseDTO} from "../../model/dto/DiplomaResponseDTO";
import {StudentService} from "../../service/student/student.service";
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../model/Student";
import {SchoolService} from "../../service/school/school.service";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {Notification} from "../../model/Notification";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: Notification[] = [];

  constructor(
    private studentService: StudentService,
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.studentService.getNotifications(this.authManagerService.getUserJmbg()).subscribe(n =>
      this.notifications = n
    );
  }
}
