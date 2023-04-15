import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  key: string = 'abb05a6f82ef9c74d1b5cde3c19b393e';
  url: string = '';

  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`;
    return this.http.get(this.url);
  }
}
