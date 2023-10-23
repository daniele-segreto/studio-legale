import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  audio: string = 'assets/audio/the-judge.mp3';
  text: string = "Il tuo browser non supporta l'elemento audio.";
}
