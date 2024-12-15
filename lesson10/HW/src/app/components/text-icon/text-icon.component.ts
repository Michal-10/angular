import { Component } from '@angular/core';
import { TextToIconPipe } from "../../Pipe/textToIcon.pipe";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-text-icon',
  standalone: true,
  imports: [TextToIconPipe,FormsModule],
  templateUrl: './text-icon.component.html',
  styleUrl: './text-icon.component.css'
})
export class TextIconComponent {
  iconText:string="";
}
