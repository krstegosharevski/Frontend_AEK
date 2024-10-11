import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../_models/querynsn';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private apiUrl = '/api/171e9dff/Request/Porting/QueryNsn';

  constructor(private http: HttpClient) { }

  getActionData(ns: string, ndc: string): Observable<ApiResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { ns, ndc };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        console.log('Raw response:', response); // Додајте лог за одговорот
        if (response.status === 'OK') {
          return JSON.parse(response.data) as ApiResponse;
        } else {
          throw new Error('Error in response status');
        }
      })
    );
  }
}
