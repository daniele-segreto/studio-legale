import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {
  // Link delle pagine da aprire in targer _blank
  href1: string = 'https://www.poste.it';
  href2: string = 'https://www.repubblica.it';
  href3: string = 'https://www.fsitaliane.it';
  href4: string = 'https://www.libero.it';
  href5: string = 'https://www.fanpage.it/';
  href6: string = 'https://www.ilmessaggero.it';


  // Apri le schede con dimensiona ridotta (per non uscire dalla nostra pagina principale)
  open1() {
    window.open(this.href1, '_blank', 'width=1225, height=650, top=80, left=148');
    return false;
  }
  open2() {
    window.open(this.href2, '_blank', 'width=1225, height=650, top=80, left=148');
    return false;
  }
  open3() {
    window.open(this.href3, '_blank', 'width=1225, height=650, top=80, left=148');
    return false;
  }
  open4() {
    window.open(this.href4, '_blank', 'width=1225, height=650, top=80, left=148');
    return false;
  }
  open5() {
    window.open(this.href5, '_blank', 'width=1225, height=650, top=80, left=148');
    return false;
  }
  open6() {
    window.open(this.href6, '_blank', 'width=1225, height=650, top=80, left=148');
    return false;
  }
}
