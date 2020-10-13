import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';

import * as fromUser from './store/reducers/user.reducer'
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { LoginPageComponent } from './components/views/login-page/login-page.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LibraryComponent } from './components/views/library/library.component';
import { AffinityComponent } from './components/views/affinity/affinity.component';
import { VisualizerComponent } from './components/views/visualizer/visualizer.component';
import { PlaylistsComponent } from './components/views/playlists/playlists.component';
import { TracklistComponent } from './components/shared/tracklist/tracklist.component';

import { httpInterceptorProviders } from './interceptors/index'
import { CookieService } from 'ngx-cookie-service';
import { LoadingComponent } from './components/views/loading/loading.component';
import { TracklistItemComponent } from './components/shared/tracklist-item/tracklist-item.component';
import { TrackCardComponent } from './components/shared/track-card/track-card.component';
import { PlayerComponent } from './containers/player/player.component';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavigationComponent,
    AuthContainerComponent,
    DashboardComponent,
    LibraryComponent,
    AffinityComponent,
    VisualizerComponent,
    PlaylistsComponent,
    TracklistComponent,
    LoadingComponent,
    TracklistItemComponent,
    TrackCardComponent,
    PlayerComponent,
    PlayerControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
       user: fromUser.reducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {provide: Window, useValue: window},
    httpInterceptorProviders,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
