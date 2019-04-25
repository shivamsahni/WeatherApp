import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService implements OnInit {

  constructor(private http:HttpClient) { 

  }
  
  ngOnInit() {
      
    

  }
  getData(city:string)  {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=36f57f9f48f086a53307931524033716`);
  }
}
