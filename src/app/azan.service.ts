import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzanService {
  private apiUrl = 'https://api.aladhan.com/v1/timingsByCity'; // Replace with your API endpoint
  private apiKey = 'YOUR_API_KEY'; // Replace with your API key

  constructor(private http: HttpClient) {}

  getAzanTimes(city: string, country: string): Observable<any> {
    const url = `${this.apiUrl}?city=${city}&country=${country}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
