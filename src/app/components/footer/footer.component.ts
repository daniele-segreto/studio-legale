import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  href: string = 'https://maps.app.goo.gl/rH6Db8PUDEWshU6X6';

  // Apri la mappa in una scheda con dimensioni ridotte (per non uscire dalla nostra pagina principale)
  openMap() {
    window.open(this.href, '_blank', 'width=1200,height=500');
    return false;
  }
}
