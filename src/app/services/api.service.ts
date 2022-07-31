import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDialogData, IResponseData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  getData(data: IDialogData): Observable<IResponseData> {
    if(data.math) {
      return this.http.get<IResponseData>(this.apiUrl + `${data.math}/math?json`)
    } else if(data.number) {
      return this.http.get<IResponseData>(this.apiUrl + `${data.number}?json`)
    } else {
      return this.http.get<IResponseData>(this.apiUrl + `${data.month}/${data.day}/date?json`)
    }
  }
}
