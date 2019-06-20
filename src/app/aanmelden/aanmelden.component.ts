import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../services/login.service';
import { Account } from '../domain/account';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PushNotificationsService} from 'ng-push';
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-aanmelden',
  templateUrl: './aanmelden.component.html',
  styleUrls: ['./aanmelden.component.css']
})
export class AanmeldenComponent implements OnInit {

  account: Account = new Account();
  


  constructor(private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) { }
  ngOnInit() {

  }

  // inlogCheck(aanmelden: NgForm) {

  //   console.log(aanmelden.value);
  //   this.loginService.checkLogin(this.account.gebruikersnaam, this.account.wachtwoord).subscribe(
  //     (account: Account) => {
  //       this.account = account;
  //       this.loginService.activeaccount = account;
  //     },

  //   (fout: HttpErrorResponse) => alert("er is iets fout gegaan"),
  //   ()=>{})

  // }
  goedmelding : String;
  foutmelding : String;
  versturen(aanmelden: NgForm) {
    this.loginService.checkLogin(this.account.gebruikersnaam, this.account.wachtwoord).subscribe(
      account  => { 
        this.loginService.activeaccount = account; 
        console.log(account);
        this.goedmelding = "U bent ingelogd, Welkom " + this.account.gebruikersnaam
       },
      error => {console.log(error.message);
       this.foutmelding = "Het gebruikersnaam is niet bekend of het wacthwoord is verkeed."},
      // () => this.router.navigate(['home'] )
    )
  }
    
}
