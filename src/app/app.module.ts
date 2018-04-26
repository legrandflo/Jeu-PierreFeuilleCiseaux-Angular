import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JeuModule } from './jeu/jeu.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,JeuModule//liaison du module JeuModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
