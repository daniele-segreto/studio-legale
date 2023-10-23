import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
// declare var $: any;  // Importazione jQuery

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  taskForm: FormGroup; // Dichiarazione di una variabile taskForm di tipo FormGroup.
  tasks: any[] = []; // Dichiarazione di una variabile tasks che è un array di tipo any.

  constructor(private formBuilder: FormBuilder, private tasksService: TasksService) {
    this.taskForm = this.formBuilder.group({
      titoloTask: ['', Validators.required],
      descrizioneTask: ['', Validators.required],
      statoTask: ['', Validators.required],
      // dataTask: ['', Validators.required]
      dataTask: [null, Validators.required] // Inizializza il campo dataTask a null
    });
  }

  ngOnInit() {
    this.loadTasks();

    // jQuery Calendar (non utilizato)
    //   $(function() {
    //     $("#datepicker").datepicker();
    //   });
  }

  async loadTasks() {
    this.tasks = await this.tasksService.getTasks();
  }

  async addTask() {
    const newTask = {
      titolo: this.taskForm.value.titoloTask, // Creazione di un nuovo oggetto newTask con i valori del form.
      descrizione: this.taskForm.value.descrizioneTask,
      stato: this.taskForm.value.statoTask,
      // data: this.taskForm.value.dataTask
      data: this.taskForm.value.dataTask ? formatDate(this.taskForm.value.dataTask, 'yyyy-MM-dd', 'en-US') : null
    };
    // this.tasks.push(newTask); // Aggiunta del nuovo task all'array tasks.
    // this.taskForm.reset(); // Reset del form dopo l'aggiunta di un task.

    await this.tasksService.addTask(newTask);
    this.loadTasks(); // Aggiorna la lista dei task dopo l'aggiunta
    this.taskForm.reset();
  }

  async deleteTask(index: number) {
    //   this.tasks.splice(index, 1); // Rimozione di un task dall'array tasks in base all'indice fornito.
    const taskId = this.tasks[index].id;
    await this.tasksService.deleteTask(taskId);
    this.loadTasks(); // Aggiorna la lista dei task dopo la cancellazione
  }

}
