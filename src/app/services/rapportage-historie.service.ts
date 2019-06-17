import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { RapportageHistorie } from '../domain/rapportage-historie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportageHistorieService {

  private url: string = environment.kentexurl;
  private endpoint: string = "rapportage";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  public create(rapportage: RapportageHistorie): Observable<RapportageHistorie> {
    return this.http.post<RapportageHistorie>(`${environment.kentexurl}rapportage`,
    rapportage, this.httpOptions)
  }

  public retrieveAll(): Observable<RapportageHistorie[]> {
    console.log(`${environment.kentexurl}rapportage`);
    return this.http.get<RapportageHistorie[]>(`${environment.kentexurl}rapportage`);
  }

  public retrieveById(id: number): Observable<RapportageHistorie> {
    return this.http.get<RapportageHistorie>(`${environment.kentexurl}rapportage/${id}`)
  }

  public update(rapportage: RapportageHistorie): Observable<RapportageHistorie> {
    return this.http.put<RapportageHistorie>(`${environment.kentexurl}rapportage/${rapportage.id}`,
    rapportage, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.kentexurl}rapportage/${id}`);
  }

  // a la opties service

  save(rapportageHistorie: RapportageHistorie): Observable<RapportageHistorie> {

   return this.http.post<RapportageHistorie>(this.url+this.endpoint, rapportageHistorie);


  }


}
