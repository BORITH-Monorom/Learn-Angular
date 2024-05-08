import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { dashboardGuard } from '../guard/dashboard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NotFoundComponent } from '../shared/component/not-found/not-found.component';

// import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [dashboardGuard],
    children:[
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'postJob', component:PostJobComponent,},
      {path: 'dashboard', component:DashboardComponent,},
      {path: 'purchase/:productName', component:PurchaseComponent},
      {path: '**' , component:NotFoundComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
