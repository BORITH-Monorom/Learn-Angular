import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PostJobComponent } from './post-job/post-job.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardGuard } from '../guard/dashboard.guard';
import { PurchaseComponent } from './purchase/purchase.component';
// import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', canActivate: [dashboardGuard],children:[
      {path: 'postJob', component:PostJobComponent,},
      {path: 'dashboard', component:DashboardComponent,},
      {path: 'purchase', component:PurchaseComponent}
    ]
  }
];
// {path: '**' , component:NotFoundComponent},

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
