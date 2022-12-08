import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "student/list",
    component : StudentListComponent
  },
  {
    path : "student/edit/:id",
    component : StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
