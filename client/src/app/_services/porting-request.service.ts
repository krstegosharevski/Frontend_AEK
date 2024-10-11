import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface NsnInfo {
  NSN: string;
  name: string;
  personalNumber: string;
  description: string;
}

export interface PortingRequest {
  dateOfPorting: string;
  donorOperatorCode: number;
  recipientOperatorCode: number;
  donorRoutingCode: string;
  status: string;
  timeOfCreation: string;
  dbo: {
    nsninfo: NsnInfo[];
  };
}

export interface PortingResponse {
  status: string;
  data: string;  // JSON string
}

@Injectable({
  providedIn: 'root'
})
export class PortingRequestService {

  private apiUrl = '/api/171e9dff/Request/Porting/getPortingRequests';

  constructor(private http: HttpClient) { }

  // getPortingRequests(selectedStatus: string): Observable<PortingRequest[]> {
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   const body = { status: 'PENDING' };

  //   return this.http.post<PortingResponse>(this.apiUrl, body, { headers }).pipe(
  //     map(response => {
  //       if (response.status === 'OK') {
  //         // Парсирање на JSON стрингот во 'data' полето
  //         const data = JSON.parse(response.data);

  //         // Враќање на податоците за портинг барања
  //         return data['dbo.portingrequest'] as PortingRequest[];
  //       }
  //       return [];
  //     })
  //   );
  // }
  getPortingRequests(status: string): Observable<PortingRequest[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = { status: status };

    return this.http.post<PortingResponse>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        if (response.status === 'OK') {
          const data = JSON.parse(response.data);
          return data['dbo.portingrequest'] as PortingRequest[];
        }
        return [];
      })
    );
  }
}
