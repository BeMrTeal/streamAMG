import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "http://localhost:3000/";

  constructor(private httpClient:HttpClient) { }

  public getTabData() {
    return this.httpClient.get(this.apiUrl + "data");
  }
}
