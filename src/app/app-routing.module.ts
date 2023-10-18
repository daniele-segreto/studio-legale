import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChisonoComponent } from './pages/chisono/chisono.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { PrenotaComponent } from './pages/prenota/prenota.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chisono',
    component: ChisonoComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'prenota',
    component: PrenotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
