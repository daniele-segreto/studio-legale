import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ChisonoComponent } from './pages/chisono/chisono.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { PrenotaComponent } from './pages/prenota/prenota.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AudioComponent } from './components/audio/audio.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChisonoComponent,
    ContattiComponent,
    PrenotaComponent,
    TasklistComponent,
    AudioComponent,
    SponsorComponent,
    QrcodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
