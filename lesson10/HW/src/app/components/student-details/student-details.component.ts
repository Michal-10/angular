import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  // @Input() currentStudent! : Student ;
  @Output() SaveMe:EventEmitter<any>=new EventEmitter<any>();;
  
  new_stud:Student | undefined;

  SaveClick=(identity:number,name:string,age:number,adress:string)=>{
    console.log("-------------SaveClick---------");
    console.log(this.new_stud);
    
    this.new_stud = new Student(identity,name,age,adress,new Date(),true);
    console.log(this.new_stud);
    this.SaveMe.emit(this.new_stud); 
  }

}
