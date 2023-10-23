import { Component } from '@angular/core';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})
export class PrenotaComponent {

  messaggioConferma: string = '';

  constructor(private prenotazioniService: PrenotazioniService) { }

  async inviaDati(event: Event) {
    event.preventDefault();

    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cognome = (<HTMLInputElement>document.getElementById('cognome')).value;
    const numero = (<HTMLInputElement>document.getElementById('numero')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const messaggio = (<HTMLInputElement>document.getElementById('messaggio')).value;

    if (nome && cognome && numero && email && messaggio) {
      await this.prenotazioniService.inviaPrenotazioniAlDatabase(nome, cognome, numero, email, messaggio);

      Swal.fire({
        icon: 'success',
        title: 'Congratulazioni!',
        text: 'Il tuo messaggio è stato inviato. Attendi una risposta.',
        showCancelButton: false,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'custom-confirm-button-class'
        }
      });

      // Svuota i campi di input
      (<HTMLInputElement>document.getElementById('nome')).value = '';
      (<HTMLInputElement>document.getElementById('cognome')).value = '';
      (<HTMLInputElement>document.getElementById('numero')).value = '';
      (<HTMLInputElement>document.getElementById('email')).value = '';
      (<HTMLInputElement>document.getElementById('messaggio')).value = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Errore',
        text: 'Per favore, compila tutti i campi.',
        customClass: {
          confirmButton: 'custom-confirm-button-class'
        }
      });
    }
  }

}
