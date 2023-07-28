import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';



const routes: Routes = [ 
  {path:'',redirectTo: 'login',pathMatch: 'full'},
  {path:'login' , component: LoginComponent}, // all
  {path:'signup' , component: SignupComponent}, // all
  {path:'home' , component:HomeComponent}, // all admin teacher students 
  {path:'teacher', component:TeacherComponent}, // admin
  {path:'student' , component:StudentComponent }, // teacher admin 
  {path:'notice-board' , component:NoticeBoardComponent}, // admin teachers students 
  {path:'add-notice' ,component:AddNoticeComponent}, // teacher admin

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
