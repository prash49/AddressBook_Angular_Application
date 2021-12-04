import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  private baseUrl: string = "http://localhost:8080/addressbookservice";

  constructor(private httpClient: HttpClient) {
    
  }

  getAllAddressData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get");
  }

  deleteAddress(id : any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/"+id);
  }

  addAddressData(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/create", body);
  }

  updateAddressData(id: number, value: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl+"/update/"+id,value);
  }
}
