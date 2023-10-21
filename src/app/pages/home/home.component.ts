import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img_banner: string = 'assets/img/studio.jpg';
  title_banner_sx: string = 'LA NOSTRA GUIDA AFFIDABILE';
  title_banner_dx: string = 'NEL MONDO DEL DIRITTO';

}
