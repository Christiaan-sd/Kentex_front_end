import { Injectable } from '@angular/core';
import { Account } from '../domain/account';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  account: Account = null;
  activeaccount : Account;
  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Account> {
    console.log(`${environment.kentexurl}Account`);
    return this.http.get<Account>(`${environment.kentexurl}Account`);
  }

  public checkLogin(gebruikersnaam: string, wachtwoord: string ): Observable<Account> {
    var account: Account = new Account();
    account.gebruikersnaam = gebruikersnaam;
    account.wachtwoord = wachtwoord;
    console.log(account.gebruikersnaam);
    console.log(`${environment.kentexurl}aanmelden`);
    return this.http.put<Account>(`${environment.kentexurl}gebruiker/aanmelden`, account, this.httpOptions);
  }

}
