import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoofdmenuComponent } from './menus/hoofdmenu/hoofdmenu.component';
import { OptiesComponent } from './opties/opties.component';

@NgModule({
  declarations: [
    AppComponent,
    HoofdmenuComponent,
    OptiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
