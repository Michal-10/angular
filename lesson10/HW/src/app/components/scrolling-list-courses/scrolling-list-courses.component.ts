import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course-service/course.service';

@Component({
  selector: 'app-scrolling-list-courses',
  standalone: true,
  imports: [],
  templateUrl: './scrolling-list-courses.component.html',
  styleUrl: './scrolling-list-courses.component.css'
})
export class ScrollingListCoursesComponent {

  listCourses?:Course[];
  constructor(private courseService:CourseService){
    this.listCourses = courseService.getCorses();
  }
}
