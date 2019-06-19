import { Component, OnInit } from '@angular/core';
import { RapportageHistorieService } from '../services/rapportage-historie.service';
import { RapportageHistorie } from '../domain/rapportage-historie';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { O_RDWR } from 'constants';
@Component({
  selector: 'app-rapportage-historie',
  templateUrl: './rapportage-historie.component.html',
  styleUrls: ['./rapportage-historie.component.css']
})
export class RapportageHistorieComponent implements OnInit {
  rapportageHistorie: RapportageHistorie[];
  constructor(private rapportageHistorieService: RapportageHistorieService) { }
  
 
  
  ngOnInit() {
    console.log(" In ngIOnInit RAPHISTORIE");
   this.rapportageHistorieService.retrieveAll().subscribe(
     (rapportageHistorie: RapportageHistorie[]) => this.rapportageHistorie = rapportageHistorie,
     (fout: HttpErrorResponse) => alert("er is iets fout gegaan"),
     ()=>{}
     
   )
   
  }
nu(kenteken_zoek: NgForm){
  console.log(kenteken_zoek.value);
  console.log(this.rapportageHistorieService.rdw(kenteken_zoek.value).subscribe());

}
  
}