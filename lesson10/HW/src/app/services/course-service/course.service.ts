import { Injectable } from '@angular/core';
import { Course, CourseNames } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    new Course(1,'A',CourseNames.A),
    new Course(2,'B',CourseNames.B),
    new Course(3,'C',CourseNames.C),
    new Course(4,'D',CourseNames.D),
  ]

  constructor() {
   }

   getCorses(){
    return this.courses;
   }
   addCourse(c:Course){
    this.courses.push(c)
   }
   updateCourse(c:Course){
    // let x = this.courses.findIndex(cs=>cs.IdCourse == c.IdCourse)
    // this.courses[x]=c;
    this.courses.push(c);
   }
}
