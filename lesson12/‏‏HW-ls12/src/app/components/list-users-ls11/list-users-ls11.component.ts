import { Component, OnInit } from '@angular/core';
import { ListUsersLs11Service } from '../../services/list-users-ls11/list-users-ls11.service';
import { role, User } from '../../models/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-users-ls11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list-users-ls11.component.html',
  styleUrl: './list-users-ls11.component.css'
})
export class ListUsersLs11Component implements OnInit {

  toAddUser=false;
  user: User | undefined;
  addUserForm!: FormGroup;
  arrUsers: User[] = []
  constructor(private listUsers: ListUsersLs11Service, private fb: FormBuilder) {
    this.arrUsers=listUsers.getUsers();
  }

  onClick(){
    this.toAddUser=true
  }

  ngOnInit(): void {
    let t = this.user;
    this.addUserForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        name: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
        role: [role,Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
        this.user = this.addUserForm.value; // שליפת נתוני הטופס
        console.log(this.user);
       
        if (this.user)
          this.listUsers.AddUser(this.user);
    }
    this.addUserForm.reset();
    this.toAddUser=false;
  }

}
