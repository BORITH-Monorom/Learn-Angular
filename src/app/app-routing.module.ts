import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { RegisterComponent } from './shared/register/register.component';
import { ResumeComponent } from './shared/resume/resume.component';
import { PriceComponent } from './shared/price/price.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { dashboardGuard } from './guard/dashboard.guard';
import { authGuard } from './guard/auth.guard';
import { PurchaseComponent } from './employer/purchase/purchase.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'home',redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'contactUs', component:ContactUsComponent},
  {path: 'resume', component:ResumeComponent},
  {path: 'price', component:PriceComponent},


  {path: 'login', component:LoginComponent, canActivate:[authGuard]},
  {path: 'register', component:RegisterComponent},
  //employer
  // {path: 'purchase', component:PurchaseComponent, canActivate:[dashboardGuard]},

  // {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
