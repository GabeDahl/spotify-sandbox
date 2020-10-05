import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffinityComponent } from './components/views/affinity/affinity.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LibraryComponent } from './components/views/library/library.component';
import { LoadingComponent } from './components/views/loading/loading.component';
import { PlaylistsComponent } from './components/views/playlists/playlists.component';
import { VisualizerComponent } from './components/views/visualizer/visualizer.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';

const routes: Routes = [
  {path: 'loading', component: LoadingComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'library', component: LibraryComponent, pathMatch: 'full'},
  {path: 'affinity', component: AffinityComponent, pathMatch: 'full'},
  {path: 'visualizer', component: VisualizerComponent, pathMatch: 'full'},
  {path: 'playlists', component: PlaylistsComponent, pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
