import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TableComponent } from './table/table.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ResumeComponent } from './shared/resume/resume.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home',redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'contactUs', component:ContactUsComponent},
  {path: 'resume', component:ResumeComponent},



  {path: 'login', component: LoginComponent, },
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  // {path: 'movies', component: MoviesComponent},
  {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
