import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoofdmenuComponent } from './menus/hoofdmenu/hoofdmenu.component';
import { OptiesComponent } from './opties/opties.component';
import { RapportageHistorieComponent } from './rapportage-historie/rapportage-historie.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { DatacontainerComponent } from './datacontainer/datacontainer.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { AanmeldenComponent } from './aanmelden/aanmelden.component';


@NgModule({
  declarations: [
    AppComponent,
    HoofdmenuComponent,
    OptiesComponent,
    RapportageHistorieComponent,
    InputContainerComponent,
    DatacontainerComponent,
    LoginInfoComponent,
    AanmeldenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
