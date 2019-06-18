import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Account } from '../domain/account';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-aanmelden',
  templateUrl: './aanmelden.component.html',
  styleUrls: ['./aanmelden.component.css']
})
export class AanmeldenComponent implements OnInit {

  account: Account = new Account(1, "", "", "", "");
  


  constructor(private loginService: LoginService) { }
  ngOnInit() {

  }

  inlogCheck(aanmelden: NgForm) {

    console.log(aanmelden.value);
    this.loginService.checkLogin(this.account).subscribe(
      (account: Account) => {
        this.account = account;
        this.loginService.account = account;
      },

    (fout: HttpErrorResponse) => alert("er is iets fout gegaan"),
    ()=>{})

  }

}
