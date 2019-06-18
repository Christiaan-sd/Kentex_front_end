import { Injectable } from '@angular/core';
import { Account } from '../domain/account';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  account: Account = null;

  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Account> {
    console.log(`${environment.kentexurl}Account`);
    return this.http.get<Account>(`${environment.kentexurl}Account`);
  }

  public checkLogin(account: Account): Observable<Account> {
    console.log(`${environment.kentexurl}Account`);
    return this.http.put<Account>(`${environment.kentexurl}checkLogin`, account, this.httpOptions);
  }

}
