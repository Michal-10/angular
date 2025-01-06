import { Component, Input, output, Output } from '@angular/core';
import { TeacherServiceService } from '../../../services/teacher-service/teacher-service.service';
import { Teacher } from '../../../models/teacher';
import { Lesson9FormComponent } from "../../lesson9-form/lesson9-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-taechers',
  standalone: true,
  imports: [CommonModule, Lesson9FormComponent],
  templateUrl:'./list-taechers.component.html',
  styleUrl: './list-taechers.component.css'
})
export class ListTaechersComponent {


  new_teacher:Teacher = new Teacher("",-1,[]); 
  arrTeachers:Teacher[];
  isAdd=false;
  // TeacherWithoutlasses='';
  constructor(private teachers:TeacherServiceService){ 
    this.arrTeachers = teachers.getTeachers()
  }

  onUpdate(s:Teacher){
    console.log("update");
    this.new_teacher=s;
  }

  onAdd(){
    console.log("Add");
    this.isAdd=true;
  }

  onCloseForm(e:boolean){
    console.log("close");
    this.isAdd=false;
    this.new_teacher = new Teacher("",-1,[]); 
  }
}
