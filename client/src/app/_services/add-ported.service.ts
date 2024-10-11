import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortingResponse } from '../_models/porting_response';

@Injectable({
  providedIn: 'root'
})
export class AddPortedService {
  private apiUrl = '/api/171e9dff/Request/Porting/Add';

  constructor(private http : HttpClient) { }

  // addPortingRequest(body: any, donor: number, recipient: number, routingCode: string, data: string | undefined, name: string, edb: string, comment: string): Observable<PortingResponse> {
  //   return this.http.post<PortingResponse>(this.apiUrl, body);
  // }
  addPortingRequest(
    ID_Nsn: number,
    donor: number,
    recipient: number,
    routingCode: string,
    date: string,
    name: string,
    edb: string,
    comment: string
  ): Observable<PortingResponse> {
    const body = {
      ID_Nsn,
      donor,
      recipient,
      routingCode,
      date,
      name,
      edb,
      comment
    };

    return this.http.post<PortingResponse>(this.apiUrl, body);
  }
}
