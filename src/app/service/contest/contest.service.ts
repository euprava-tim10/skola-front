import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contest} from "../../model/Contest";
import {CreateContestApplicationDTO} from "../../model/dto/CreateContestApplicationDTO";
import {ContestApplication} from "../../model/ContestApplication";

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  private readonly server:string = environment.serverPath;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};
  constructor(
    private httpClient: HttpClient
  ) { }

  getContest(contestId: number) {
    return this.httpClient.get<Contest>(`${this.server}/api/konkursi/${contestId}`, this.options);
  }

  getActiveContests() {
    return this.httpClient.get<Contest[]>(`${this.server}/api/konkursi`, this.options);
  }

  createApplication(contestId: number, contestApplication: CreateContestApplicationDTO) {
    return this.httpClient.post<number>(`${this.server}/api/konkursi/${contestId}/prijave`, JSON.stringify(contestApplication), this.options);
  }

  getContestApplicationsByCourse(contestId: number, courseId: number) {
    return this.httpClient.get<ContestApplication[]>(
      `${this.server}/api/konkursi/${contestId}/smerovi/${courseId}/prijave`, this.options);
  }

  getContestApplications(contestId: number) {
    return this.httpClient.get<ContestApplication[]>(
      `${this.server}/api/konkursi/${contestId}/prijave`, this.options);
  }
}
