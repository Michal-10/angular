import { Component } from '@angular/core';
import { StudentComponent } from './components/student/student.component';
import { TextToIconPipe } from "./Pipe/textToIcon.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent, TextToIconPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="lesson3+lesson4";
}
