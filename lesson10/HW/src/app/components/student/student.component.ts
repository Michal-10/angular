import { Component, Input } from '@angular/core';

import { StudentDetailsComponent } from "../student-details/student-details.component";
import { InformationCardComponent } from '../information-card/information-card.component';
import { NgTemplateOutlet } from '@angular/common';
import { CustomDirectiveLs7Directive } from '../custom_directive_ls7/custom-directive-ls7.directive';
import { Student } from '../../models/student';
import { ScrollingListCoursesComponent } from "../scrolling-list-courses/scrolling-list-courses.component";
import { ListTaechersComponent } from "../list-Teachers/list-taechers/list-taechers.component";
import { TextToIconPipe } from '../../Pipe/textToIcon.pipe';
import { TextIconComponent } from "../text-icon/text-icon.component";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent, InformationCardComponent, NgTemplateOutlet,
    CustomDirectiveLs7Directive, ScrollingListCoursesComponent,
    ListTaechersComponent, TextToIconPipe, TextIconComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
   
  colorSelect:string='';
  public selected: number = 0
  selectedForDelete: number = 0;
  @Input() currentStudent?: Student;

  AllStudent: Student[] = [
    new Student(1, "Rachely", 18, "Rabbi Akiva", new Date(), true,true),
    new Student(2, "Nachama", 25, "Yavne", new Date(), true,true),
    new Student(3, "Lea", 14.5, "???", new Date(), true,true),
    new Student(4, "Lea", 14.5, "???", new Date(), true,true),
    new Student(5, "Lea", 14.5, "???", new Date(), true,true),
    new Student(6, "Lea", 14.5, "???", new Date(), true,false),
    new Student(7, "Lea", 14.5, "???", new Date(), true,false),
  ];

  deleteClick = (s: Student) => {
    this.currentStudent=s;
    this.selectedForDelete = s.id;
  }

  deleteStudent(flag:boolean) {    
    if(flag){
        this.AllStudent.splice(this.AllStudent.findIndex(student => student.id === this.currentStudent?.id), 1);
        this.selected = 0;
    }
    this.selectedForDelete = 0;
    this.currentStudent=undefined
  }

  EditClick = (idstud: number) => {
    this.currentStudent = undefined
    this.selected = idstud;
  }

  AddClick = () => {
    this.selected = -1
    this.selected
  }

  SaveStudent(student: Student) {
    if (this.AllStudent.findIndex(stud => stud.id === student.id) != -1) {
      this.AllStudent = this.AllStudent.map(s => s.id === student.id ? student : s);
      this.selected = 0;
    } else {
      // this.AllStudent = this.AllStudent.map(s => s.id === student.id? student : s);
      this.AllStudent.push(student);
      this.selected = 0;
    }
  }
}
