import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptiesComponent } from './opties/opties.component';
import { RapportageHistorieComponent } from './rapportage-historie/rapportage-historie.component';
import { AanmeldenComponent } from './aanmelden/aanmelden.component';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {path: "opties", component: OptiesComponent},
  {path: "RapportageHistorie", component:RapportageHistorieComponent},
  {path: "aanmelden", component: AanmeldenComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
