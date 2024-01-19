import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TableComponent } from './table/table.component';
import { StoreNgrxComponent } from './shared/store-ngrx/store-ngrx.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, },
  {path: 'home',redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'contactUs', component:ContactUsComponent},

  {path: 'store-ngrx', component:StoreNgrxComponent},
  {path: '**' , component:NotFoundComponent},

  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  // {path: 'movies', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
