import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d65dbd4dbda444a98f5dfcd6e6d96dcc"


  technewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d65dbd4dbda444a98f5dfcd6e6d96dcc"


  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d65dbd4dbda444a98f5dfcd6e6d96dcc"

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl);
  }

  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
