import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contest} from "../../model/Contest";

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
}
