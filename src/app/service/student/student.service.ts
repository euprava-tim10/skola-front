import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {School} from "../../model/School";
import {DiplomaResponseDTO} from "../../model/dto/DiplomaResponseDTO";
import {Observable} from "rxjs";
import {StudentGPA} from "../../model/dto/StudentGPA";
import {Notification} from "../../model/Notification";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly server = environment.serverPath;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getDiploma(jmbg: string, schoolType: string):Observable<DiplomaResponseDTO> {
    return this.httpClient.get<DiplomaResponseDTO>(`${this.server}/api/ucenici/${jmbg}/diploma/${schoolType}`, this.options);
  }

  issueDiploma(studentGPA: StudentGPA) {
    return this.httpClient.post(`${this.server}/api/ucenici/diploma/issue`, studentGPA, this.options);
  }

  getNotifications(jmbg: string):Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(`${this.server}/api/notifikacije/${jmbg}`, this.options);
  }
}
