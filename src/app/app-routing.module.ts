import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guard/auth.guard';
import { canDeactiveGuard } from './guard/can-deactive.guard';
import { AboutUsComponent } from './shared/component/about-us/about-us.component';
import { ContactUsComponent } from './shared/component/contact-us/contact-us.component';
import { HomeComponent } from './shared/component/home/home.component';
import { LoginComponent } from './shared/component/login/login.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { PriceComponent } from './shared/component/price/price.component';
import { RegisterComponent } from './shared/component/register/register.component';
import { ResumeComponent } from './shared/component/resume/resume.component';
import { SharedModule } from './shared/shared.module';
const routes: Routes = [
  
  // {path: 'home',redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'contactUs', component:ContactUsComponent, canDeactivate:[canDeactiveGuard]},
  {path: 'resume', component:ResumeComponent, canDeactivate:[canDeactiveGuard]},
  {path: 'price', component:PriceComponent},
  {path:'employer', loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)},
  {path: 'login', component:LoginComponent, canActivate:[authGuard]},
  {path: 'register', component:RegisterComponent},
  // {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
