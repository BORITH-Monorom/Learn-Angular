import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './data_binding/event-binding/event-binding.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'binding', component:EventBindingComponent },
  {path: 'table', component:TableComponent},
  // {path: 'movies', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
