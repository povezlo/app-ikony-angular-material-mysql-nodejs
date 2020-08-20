import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {Icon} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class WorkWithFirebaseIconsService {

    constructor(private http: HttpClient) {
    }

  create(data: Icon): Observable<Icon> {
    return this.http.post(environment.baseUrl, data).pipe(map((response: any) => {
                  return {...data, id: response.name};}));
      }

  getAll(): Observable<Icon[]> {
    return this.http.get(environment.baseUrl).pipe(tap(v => console.log('Response MySQL', v)),
      map((response: { [key: string]: any }) => {
                  return Object
                      .keys(response)
                      .map(key => ({
                          ...response[key]
                      }));
              })
    );
    }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/${id}`);
  }

  getById(id: string): Observable<Icon> {
    return this.http.get<Icon>(`${environment.baseUrl}/${id}`);
  }


  patch(id: string, objChanged?: any): Observable<any>  {
    return this.http.put<Icon>(`${environment.baseUrl}/${id}`, objChanged);
  }
}
