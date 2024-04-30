import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "e7222b98ff30ad26ef734fe071e273f0";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weatherTemp: any
  todayDate = new Date()
  cityName = ""
  weatherIcon: any
  weatherDetail: any
  name = ""
  loading = true

  constructor(public httpClient: HttpClient) { 
   // this.loadData()
  }

  ngOnInit() {
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main'];
      this.name = results['name']
      console.log(this.weatherTemp);
      this.weatherDetail = results['weather'][0]
      console.log(this.weatherDetail)
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetail.icon}@4x.png`
      this.loading = false
    })
  }

}
