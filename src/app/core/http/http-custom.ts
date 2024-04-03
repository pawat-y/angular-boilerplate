import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpCustom {
  baseUrl: string = 'localhost:8080/api';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  get(url: string): Observable<Object> {
    return this.http.get(this.baseUrl + url, { headers: this.headers });
  }

  post(url: string, data: object): Observable<Object> {
    return this.http.post(this.baseUrl + url, data, {
      headers: this.headers,
    });
  }

  put(url: string, data: object): Observable<Object> {
    return this.http.put(this.baseUrl + url, data, {
      headers: this.headers,
    });
  }

  delete(url: string): Observable<Object> {
    return this.http.delete(this.baseUrl + url, { headers: this.headers });
  }

  getBlob(url: string): Observable<Object> {
    return this.http.get(this.baseUrl + url, {
      headers: this.headers,
      responseType: 'blob',
    });
  }
}
