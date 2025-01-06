import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherServiceService } from '../../services/teacher-service/teacher-service.service';


@Component({
  selector: 'app-lesson9-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lesson9-form.component.html',
  styleUrl: './lesson9-form.component.css'
})
export class Lesson9FormComponent {

  @Output() close:EventEmitter<any> = new EventEmitter<any>();
  @Input() new_teacher:Teacher= new Teacher("",-1,[]);
  @Input() isAdd=false;
  @Input() isEdit=false;

  constructor(private t:TeacherServiceService){
  }

  onSubmit(){
    if(this.isEdit){
      this.t.updateTeacher(this.new_teacher);
      this.close.emit(true)
      this.new_teacher= new Teacher("",-1,[]);
      this.isAdd=false;
      this.isEdit=false;
    }

    if(this.isAdd){
      this.new_teacher.id=this.t.getTeachers().length+1;
      this.t?.AddTeacher(this.new_teacher);
      this.close.emit(true)
      this.new_teacher= new Teacher("",-1,[]);
      this.isAdd=false;
      this.isEdit=false;
    }
  }

}
