import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ListUsersLs11Service {

  arrUsers:User[]=[]
  
  constructor() { }

  getUsers(){
    return this.arrUsers;
  }

  AddUser(user:User){
    user.id=this.arrUsers.length+1;
    this.arrUsers.push(user);
  }


  UpdateUser(user:User){
    let userToUpdate=this.arrUsers.find(u=>u.id===user.id);
    if(userToUpdate){
      userToUpdate.email=user.email;
      userToUpdate.name=user.name;
      userToUpdate.password=user.password;
      userToUpdate.role=user.role;
    }
  }

  deleteUser(user:User){
    this.arrUsers.slice(this.arrUsers.findIndex(u=>u.id==user.id),1);
  }
}
