import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Contest} from "../../model/Contest";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private readonly server:string = environment.serverPath;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};
  constructor(
    private httpClient: HttpClient
  ) { }

  getSchoolContests(schoolId: number) {
    return this.httpClient.get<Contest[]>(`${this.server}/api/skole/${schoolId}/konkursi`, this.options);
  }
}
