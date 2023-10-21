import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// declare var $: any;  // Importazione jQuery

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  taskForm: FormGroup; // Dichiarazione di una variabile taskForm di tipo FormGroup.
  tasks: any[] = []; // Dichiarazione di una variabile tasks che è un array di tipo any.

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      titoloTask: ['', Validators.required], // Creazione di un campo titoloTask nel form con validazione di obbligatorietà.
      descrizioneTask: ['', Validators.required], // Creazione di un campo descrizioneTask nel form con validazione di obbligatorietà.
      statoTask: ['', Validators.required], // Creazione di un campo statoTask nel form con validazione di obbligatorietà.
      dataTask: ['', Validators.required] // Creazione di un campo dataTask nel form con validazione di obbligatorietà.
    });
  }

  addTask() {
    const newTask = {
      titolo: this.taskForm.value.titoloTask, // Creazione di un nuovo oggetto newTask con i valori del form.
      descrizione: this.taskForm.value.descrizioneTask,
      stato: this.taskForm.value.statoTask,
      data: this.taskForm.value.dataTask
    };
    this.tasks.push(newTask); // Aggiunta del nuovo task all'array tasks.
    this.taskForm.reset(); // Reset del form dopo l'aggiunta di un task.
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Rimozione di un task dall'array tasks in base all'indice fornito.
  }

  // Parte alla creazione del Componente (utilizzato anche per jqQuery)
  // ngOnInit(): void {
  //   $(function() {
  //     $("#datepicker").datepicker();
  //   });
  // }
}
