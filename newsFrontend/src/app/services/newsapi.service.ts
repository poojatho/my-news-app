import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  //top headlines api url
  topHeadlineNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=491c4d4ae7ce497985f111057abbf0ec';

  //Tech News api url
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=491c4d4ae7ce497985f111057abbf0ec';
  

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlineNews)
  }

  //For tecnical news

  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)
  }
}
