import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  private weatherUrl = 'api/weatherforecast/';

  constructor(private http: HttpClient) {
    console.log("Create WeatherforecastService"); 
  }

  /** GET heroes from the server */
  getWeather(): Observable<Weather[]> {
    console.log("Get Weather");  //TODO: 로깅모듈로 변경하기
    return this.http.get<Weather[]>(this.weatherUrl)
  }

}
