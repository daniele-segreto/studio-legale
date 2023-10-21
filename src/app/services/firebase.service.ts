import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Inizializza l'app Firebase con le credenziali specificateimport
  private app = initializeApp({
    apiKey: "AIzaSyCNg7hEkg5Bf8p0Il1r_gSNLNZJqGkSHAQ",
    authDomain: "studio-legale-aa081.firebaseapp.com",
    projectId: "studio-legale-aa081",
    storageBucket: "studio-legale-aa081.appspot.com",
    messagingSenderId: "43778021756",
    appId: "1:43778021756:web:a20f879ae1e02a25686cf9"
  });

  // Ottieni l'istanza del database Firestore
  public db: Firestore = getFirestore(this.app);

  constructor() { }

  // Metodo per inviare prenotazioni (e dati utente) Firestore Database
  async inviaPrenotazioniAlDatabase(nome: string, cognome: string, numero: string, email: string, messaggio: string) {

    // Crea un oggetto con i dati da inviare
    const dati = {
      nome,
      cognome,
      numero,
      email,
      messaggio
    };

    // Aggiungi i dati alla collezione 'prenotazioni' nel database
    const docRef = await addDoc(collection(this.db, 'prenotazioni'), dati);

    // Stampa un messaggio di conferma con l'ID del documento appena creato
    console.log('Dati inviati con successo con ID:', docRef.id);

  }

  // Metodo per inviare i task al Firestore Database
  // code...

  // Metodo per ottenere i dask dal Firestore Database
  // code...

  // Metodo per visualizzare sulla pagina i dati ottenuti dal Firestore Database
  // code...

}
