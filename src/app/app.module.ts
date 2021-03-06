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
import { PushNotificationsModule } from 'ng-push';
import { AccountcreateComponent } from './accountcreate/accountcreate.component';
import { GebruikerInfoComponent } from './gebruiker-info/gebruiker-info.component'; //import the module


@NgModule({
  declarations: [
    AppComponent,
    HoofdmenuComponent,
    OptiesComponent,
    RapportageHistorieComponent,
    InputContainerComponent,
    DatacontainerComponent,
    LoginInfoComponent,
    AanmeldenComponent,
    AccountcreateComponent,
    GebruikerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PushNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
