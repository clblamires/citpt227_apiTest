import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './interfaces/weather.interface';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key: string = "REDACTED";
  url: string = "http://api.weatherstack.com/current?access_key=" + this.key;
  ip : string;

  constructor( public http: HttpClient, private networkInterface: NetworkInterface ) { }

  getWeather(){
    // default location, zipcode = 83501
    this.networkInterface.getWiFiIPAddress().then( address => {
      console.log(address);
    })
    return this.http.get<Weather>(this.url + "&query=83501&units=f");
  }
}
