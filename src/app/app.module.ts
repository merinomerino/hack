import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoHackComponent } from './pages/nuevo-hack/nuevo-hack.component';
import { HttpClientModule } from '@angular/common/http';
import { MisHacksComponent } from './pages/mis-hacks/mis-hacks.component';

import { NavbarComponent } from './sidebar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoHackComponent,
    MisHacksComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
