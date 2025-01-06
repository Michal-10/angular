import { Component } from '@angular/core';
import { StudentComponent } from './components/student/student.component';
import { TextToIconPipe } from "./Pipe/textToIcon.pipe";
import { ListUsersLs11Component } from './components/list-users-ls11/list-users-ls11.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive,RouterOutlet,MatButtonModule, MatMenuModule
    // ,BrowserAnimationsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="lesson3+lesson4";
}
