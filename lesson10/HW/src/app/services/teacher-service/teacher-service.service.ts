import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor() { }

  arrTeachers:Teacher[] = [
  ]

  getTeachers(){
    return this.arrTeachers;
  }

  AddTeacher(t:Teacher ){
    this.arrTeachers.push(t);
  }

 updateTeacher(teacher:Teacher){
  let t = this.arrTeachers.find(t=>t.id===teacher.id);
  if(t){
    t.classes=teacher.classes;
    t.name=teacher.name;
  }
    
 }

 deleteTeacher(teacher:Teacher){
   let x:number = this.arrTeachers.findIndex(t=>t.id===teacher.id);
   if(x!=-1)
    this.arrTeachers.slice(x,1)
 }
}
