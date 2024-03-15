import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'visualization', component:VisualizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
