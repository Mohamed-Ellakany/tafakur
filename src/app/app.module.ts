import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PrayComponent } from './pray/pray.component';
import { AzkarComponent } from './azkar/azkar.component';
import {HttpClientModule} from '@angular/common/http';
import { TasbehComponent } from './tasbeh/tasbeh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ArbeenComponent } from './arbeen/arbeen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PrayComponent,
    AzkarComponent,
    TasbehComponent,
    ArbeenComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
