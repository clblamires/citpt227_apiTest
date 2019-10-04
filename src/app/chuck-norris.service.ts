import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Joke } from './interfaces/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  url  : string  = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
  host : string  = "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
  key  : string  = "REDACTED";

  constructor( public http: HttpClient ) {
  }
  
  getJoke(){
    const httpHeaders = {
      headers: new HttpHeaders({
        "x-rapidapi-host" : "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key"  : this.key,
        "accept"          : "application/json"
      })
    }
    return this.http.get<Joke>(this.url, httpHeaders);
  }

}
