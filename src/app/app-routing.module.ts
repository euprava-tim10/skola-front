import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedirectComponent} from "./pages/redirect/redirect.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {IsAnonymousGuard} from "./auth/guards/is-anonymous.guard";
import {IsAdminGuard} from "./auth/guards/is-admin.guard";
import {AdminContestsComponent} from "./pages/admin-contests/admin-contests.component";
import {AdminStudentsComponent} from "./pages/admin-students/admin-students.component";
import {NewContestComponent} from "./pages/new-contest/new-contest.component";
import {ContestComponent} from "./pages/contest/contest.component";
import {IsLoggedInGuard} from "./auth/guards/is-logged-in.guard";
import {IsStudentGuard} from "./auth/guards/is-student.guard";
import {StudentContestsComponent} from "./pages/student-contests/student-contests.component";
import {ContestApplicationComponent} from "./pages/contest-application/contest-application.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'redirect', component: RedirectComponent, canActivate: [IsAnonymousGuard]
  },
  {
    path: 'admin/contests', component: AdminContestsComponent, canActivate: [IsAdminGuard]
  },
  {
    path: 'admin/contests/new', component: NewContestComponent, canActivate: [IsAdminGuard]
  },
  {
    path: 'admin/students', component: AdminStudentsComponent, canActivate: [IsAdminGuard]
  },
  {
    path: 'student/contests', component: StudentContestsComponent, canActivate: [IsStudentGuard]
  },
  {
    path: 'student/contests/:id/application', component: ContestApplicationComponent, canActivate: [IsStudentGuard]
  },
  {
    path: 'contests/:id', component: ContestComponent, canActivate: [IsLoggedInGuard]
  },
  {
    path: 'profile/:jmbg', component: ProfileComponent, canActivate: [IsLoggedInGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
