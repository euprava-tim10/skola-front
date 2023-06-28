import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Contest} from "../../model/Contest";
import {Course} from "../../model/Course";
import {School} from "../../model/School";
import {Student} from "../../model/Student";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private readonly server = environment.serverPath;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};
  constructor(
    private httpClient: HttpClient
  ) { }

  getById(schoolId: number) {
    return this.httpClient.get<School>(`${this.server}/api/skole/${schoolId}`, this.options);
  }

  getSchoolContests(schoolId: number) {
    return this.httpClient.get<Contest[]>(`${this.server}/api/skole/${schoolId}/konkursi`, this.options);
  }

  getSchoolCourses(schoolId: number) {
    return this.httpClient.get<Course[]>(`${this.server}/api/skole/${schoolId}/smerovi`, this.options);
  }

  createContest(schoolId: number, contest: Contest) {
    return this.httpClient.post<Contest>(`${this.server}/api/skole/${schoolId}/konkursi`, JSON.stringify(contest),this.options);
  }

  getSchoolStudents(schoolId: number) {
    return this.httpClient.get<Student[]>(`${this.server}/api/skole/${schoolId}/studenti`, this.options);
  }
}
