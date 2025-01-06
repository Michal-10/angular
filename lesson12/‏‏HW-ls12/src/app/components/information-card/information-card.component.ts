import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.css'
})
export class InformationCardComponent {
 @Output() studentInformation:EventEmitter<any>=new EventEmitter<any>();
 
 clickToDeleteOrNot(flag:boolean){
  this.studentInformation.emit(flag);
 }
}
