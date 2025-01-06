import { Routes } from '@angular/router';
import { ListTaechersComponent } from './components/list-Teachers/list-taechers/list-taechers.component';
import { StudentComponent } from './components/student/student.component';
import { ListUsersLs11Component } from './components/list-users-ls11/list-users-ls11.component';
import { TextIconComponent } from './components/text-icon/text-icon.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    {path:'Teachers',component:ListTaechersComponent},
    {path:'Students',component:StudentComponent},
    {path:'Users',component:ListUsersLs11Component},
    {path:'TextToIcon',component:TextIconComponent}
];
