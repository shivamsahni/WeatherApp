import { Component, OnInit, Input } from '@angular/core';
import { List } from '../IWeatherData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() weatherReport:List;
  day:string;
  image:string;
  days:Array<string>=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  hightemp:number;
  lowtemp:number;
  constructor() {
  }

  ngOnInit() {
    this.image=`http://openweathermap.org/img/w/${this.weatherReport.weather[0].icon}.png`;
    this.day=this.days[new Date(this.weatherReport.dt_txt).getDay()];
    this.hightemp=Math.round(this.weatherReport.main.temp_max-273.15);
    this.lowtemp=Math.round(this.weatherReport.main.temp_min-273.15);
  }

}
