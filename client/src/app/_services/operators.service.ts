import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  private apiUrl = '/api/171e9dff/Request/Porting/getOperators';

  constructor(private http: HttpClient) { }

  getOperators(): Observable<{code: string, name: string}[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {};

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        console.log('API response:', response); // Додај лог за да ја провериш одговорот
        if (response.status === 'OK') {
          const data = JSON.parse('[' + response.data + ']');
          console.log('Parsed data:', data); // Додај лог за да ја провериш парсираните податоци
          return data.map((item: any) => ({
            code: item.code,
            name: item.name
          }));
        }
        return [];
      })
    );
  }
}
