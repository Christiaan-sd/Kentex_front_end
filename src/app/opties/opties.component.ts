import { Component, OnInit } from '@angular/core';
import { OptiesService } from '../services/opties.service';
import { Opties } from '../domain/opties';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
  HttpRequest, HttpResponse} from '@angular/common/http';
import { RapportageHistorieService } from '../services/rapportage-historie.service';
import { RapportageHistorie } from '../domain/rapportage-historie';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-opties',
  templateUrl: './opties.component.html',
  styleUrls: ['./opties.component.css']
})
export class OptiesComponent implements OnInit {
  
  name: string;
  

  opties: Opties[];
  constructor(private optiesService: OptiesService,
          private rapportageHistorieService: RapportageHistorieService) { }

  ngOnInit() { 
    console.log(" In ngIOnInit");
    this.optiesService.retrieveAll().subscribe(
      (opties:Opties[]) => this.opties = opties ,
      (fout: HttpErrorResponse) => alert("er is iets fout gegaan"),
      ()=>{}
    )
  }

  verwerken(keuzen: NgForm) {
    console.log(keuzen.value);
  }

  VerstuurNaarDB (keuzen: NgForm) {

    console.log(keuzen.value);
  
    // maak hier een rapportagehistorie object aan
  


    // let enabledOptiesAsString = "";
    const enabledOpties = [];
    for(let element in keuzen.value) {
      
      if(keuzen.value[element] == true) {
        console.log(element);
        // enabledOptiesAsString += element;
        // optie : Opties = new Opties(+keuzen.value);
        enabledOpties.push({id: +element})
        console.log(enabledOpties)
        // // voeg hier het element toe aan de optie en voeg die optie toe aan de rapportagehistorie
      }
     
    }
    let rapportageHistorie = new RapportageHistorie(this.name, enabledOpties);

    console.log(rapportageHistorie);

    this.rapportageHistorieService.save(rapportageHistorie).subscribe(terugontvangenRapportageHistorie => {
      console.log(terugontvangenRapportageHistorie);
    }); // krijgt een observable terug dus .subscribe (terugontvangenResult)

    console.log("einde verstuur db");

  // new HttpRequest('POST', "http://localhost:8080/opties/", keuzen.value)
  }

}
