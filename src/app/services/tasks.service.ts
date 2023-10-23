import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
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

  async getTasks() {
    const querySnapshot = await getDocs(collection(this.db, 'tasks'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async addTask(newTask: any) {
    await addDoc(collection(this.db, 'tasks'), newTask);
  }

  async deleteTask(taskId: any) {
    await deleteDoc(doc(this.db, 'tasks', taskId));
  }
}
