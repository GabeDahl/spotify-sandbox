import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffinityComponent } from './components/views/affinity/affinity.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LibraryComponent } from './components/views/library/library.component';
import { PlaylistsComponent } from './components/views/playlists/playlists.component';
import { VisualizerComponent } from './components/views/visualizer/visualizer.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'affinity', component: AffinityComponent},
  {path: 'visualizer', component: VisualizerComponent},
  {path: 'playlists', component: PlaylistsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
