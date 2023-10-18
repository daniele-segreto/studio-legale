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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChisonoComponent,
    ContattiComponent,
    PrenotaComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
