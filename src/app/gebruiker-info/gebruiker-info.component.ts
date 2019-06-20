import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-gebruiker-info',
  templateUrl: './gebruiker-info.component.html',
  styleUrls: ['./gebruiker-info.component.css']
})
export class GebruikerInfoComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    
  }

}
