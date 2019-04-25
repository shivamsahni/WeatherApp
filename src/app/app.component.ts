import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data.service'
import { RootObject,List } from './IWeatherData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'WeatherApp';
  show:boolean=false;
  city: string;
  location:string;
  date:string;
  imageUrl:string;
  overCast:string;
  temp:number;
  humidity:number;
  wind:number;
  dataArr:Array<List>=[];
  weatherInfo :RootObject;
  constructor(private weatherData: WeatherDataService) {
  }
  PassData() :void{
    for (let index = 0; index < 4; index++) {
      this.dataArr.push(this.weatherInfo.list[index*8]);
    }
  }
  Clicked(): void {
    this.dataArr.length=0
    this.weatherData.getData(this.city).subscribe((d: RootObject) => {
      this.weatherInfo=d;
      this.show=true;
      this.location=`${this.weatherInfo.city.name},${this.weatherInfo.city.country}`;
      this.date=new Date().toDateString();
      this.overCast = this.weatherInfo.list[0].weather[0].main;
      this.temp = Math.round(this.weatherInfo.list[0].main.temp-273.15);
      this.humidity=this.weatherInfo.list[0].main.humidity;
      this.wind=this.weatherInfo.list[0].wind.speed;
      this.imageUrl=`http://openweathermap.org/img/w/${this.weatherInfo.list[0].weather[0].icon}.png`;
      //this.dataArr.length=0;
      this.PassData();
    });
  }
}

