import { Component, OnInit } from '@angular/core';
import { RapportageHistorieService } from '../services/rapportage-historie.service';
import { RapportageHistorie } from '../domain/rapportage-historie';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { OptiesService } from '../services/opties.service';
import { Opties } from '../domain/opties';
@Component({
  selector: 'app-rapportage-historie',
  templateUrl: './rapportage-historie.component.html',
  styleUrls: ['./rapportage-historie.component.css']
})
export class RapportageHistorieComponent implements OnInit {
  rapportageHistorie: RapportageHistorie[];

  rdwdata: any;
  selectedOpties: Opties[];

  constructor(private rapportageHistorieService: RapportageHistorieService,
    private loginService: LoginService,
    private router: Router,
    private optieService: OptiesService,) { }



  ngOnInit() {
    // if(this.loginService.activeaccount == null){
    //   this.router.navigate(['aanmelden']);
    // }
    console.log(" In ngIOnInit RAPHISTORIE");
    this.rapportageHistorieService.retrieveAll().subscribe(
      (rapportageHistorie: RapportageHistorie[]) => this.rapportageHistorie = rapportageHistorie,
      (fout: HttpErrorResponse) => alert("er is iets fout gegaan"),
      () => { }

    )

  }
  nu(kenteken_zoek: NgForm) {
    console.log(kenteken_zoek.value);
    // console.log(this.rapportageHistorieService.rdw(kenteken_zoek.value).subscribe());
    this.rapportageHistorieService.rdw(kenteken_zoek.value.name).subscribe(
      data => {
      this.rdwdata = null;
        console.log("opgehaalde data");
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          this.rdwdata = data[i];
          
          // console.log(data[i].bruto_bpm);
          // console.log(data[i].eerste_kleur);
          // return data[i].bruto_bpm;
        }

      },
      error => console.log(error),
      () => console.log("RDW data request volledig verwerk")
    )
  }

  selecteerRapportage(id: number) {
    console.log(id);
    this.rapportageHistorieService.retrieveById(id).subscribe(
      (data: RapportageHistorie) => 
          this.selectedOpties = data.opties,
    error => console.log(error),
      () => console.log("Rapportagehistorie van id " + id + " opgehaald")
    )
  }

  getRdwData(optie : string) : string {
   
    return this.rdwdata[optie.toLowerCase()];

  }

}