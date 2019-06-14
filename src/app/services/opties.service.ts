import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opties } from '../domain/opties';


@Injectable({
  providedIn: 'root'
})
export class OptiesService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(optie: Opties): Observable<Opties> {
    return this.http.post<Opties>(`${environment.kentexurl}optie`,
        optie, this.httpOptions)
  }

  public retrieveAll(): Observable<Opties[]> {
    console.log(`${environment.kentexurl}opties`);
    return this.http.get<Opties[]>(`${environment.kentexurl}opties`);
  }

  public retrieveById(id: number): Observable<Opties> {
    return this.http.get<Opties>(`${environment.kentexurl}optie/${id}`)
  }

  public update(optie: Opties): Observable<Opties> {
    return this.http.put<Opties>(`${environment.kentexurl}optie/${optie.id}`,
        optie, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.kentexurl}optie/${id}`);
  }
}
