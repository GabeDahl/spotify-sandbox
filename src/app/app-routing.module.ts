import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffinityComponent } from './components/views/affinity/affinity.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LibraryComponent } from './components/views/library/library.component';
import { VisualizerComponent } from './components/views/visualizer/visualizer.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'affinity', component: AffinityComponent},
  {path: 'visualizer', component: VisualizerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
