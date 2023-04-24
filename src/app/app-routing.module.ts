import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedirectComponent} from "./pages/redirect/redirect.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'redirect', component: RedirectComponent,
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
