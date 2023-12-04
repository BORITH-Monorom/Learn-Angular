import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './data_binding/event-binding/event-binding.component';
import { TableComponent } from './table/table.component';
import { StoreNgrxComponent } from './shared/store-ngrx/store-ngrx.component';
import { NgifComponent } from './shared/directive/ngif/ngif/ngif.component';
import { NgclassComponent } from './shared/directive/ngclass/ngclass.component';
import { PropertyBindingComponent } from './data_binding/property-binding/property-binding.component';
import { NgcontentComponent } from './shared/directive/ngcontent/ngcontent.component';
import { NgtemplateComponent } from './shared/directive/ngtemplate/ngtemplate.component';
import { ViewchildComponent } from './shared/angularcore/viewchild/viewchild.component';
import { BindingComponent } from './shared/angularcore/binding/binding.component';
import { NgforComponent } from './shared/directive/ngfor/ngfor.component';
import { ParentHookComponent } from './shared/lifecycle-hook/parent-hook/parent-hook.component';
import { InputComponent } from './shared/angularcore/input/input.component';
import { OutputComponent } from './shared/angularcore/output/output.component';
import { DialogComponent } from './shared/material/dialog/dialog.component';
import { StyleBindingComponent } from './data_binding/style-binding/style-binding.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'eventbinding', component:EventBindingComponent },
  {path: 'table', component:TableComponent},
  {path: 'store-ngrx', component:StoreNgrxComponent},
  {path: 'ngif', component:NgifComponent},
  {path: 'ngclass', component:NgclassComponent},
  {path: 'propertybinding', component:PropertyBindingComponent},
  {path: 'ngcontent', component:NgcontentComponent},
  {path: 'ngtemplate', component:NgtemplateComponent},
  {path: 'viewchild', component: ViewchildComponent},
  {path: 'binding', component:BindingComponent},
  {path: 'ngfor' , component:NgforComponent},
  {path: 'parenthook', component:ParentHookComponent},
  {path: 'input', component:InputComponent},
  {path: 'output', component:OutputComponent},
  {path: 'dialog', component:DialogComponent},
  {path: 'stylebinding', component:StyleBindingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'verify-email', component:VerifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  // {path: 'movies', component: MoviesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
