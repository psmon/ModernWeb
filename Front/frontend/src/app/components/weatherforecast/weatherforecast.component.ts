import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherforecastService } from 'src/app/services/weatherforecast.service';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.scss']
})
export class WeatherforecastComponent implements OnInit {

  headers = ["date", "temperatureC", "temperatureF", "summary"];

  weathers: Weather[]

  constructor(private weatherforecastService:WeatherforecastService) {
    console.log("Create WeatherforecastComponent"); 
  }

  ngOnInit(): void {
    console.log("Init WeatherforecastComponent");
    this.getWeathers();
  }

  getWeathers(): void{    
    this.weatherforecastService.getWeather()
      .subscribe(weathers => this.weathers = weathers);      
  }

}
