import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzanService {
  private apiUrl = 'https://api.aladhan.com/v1/timingsByCity'; 

constructor(private http: HttpClient) {}

getAzanTimes(city: string, country: string): Observable<any> {
  const url = `${this.apiUrl}?city=${city}&country=${country}`;
  return this.http.get(url);
}
}
