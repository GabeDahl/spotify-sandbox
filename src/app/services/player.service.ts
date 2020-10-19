import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlayerState } from '../store/models/player-state.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerState: Subject<PlayerState>;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.playerState = new Subject<PlayerState>();
  }

  initializePlayer() {
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      const token = this.authService.accessTokenValue;
      const player = new Spotify.Player({
        name: 'Sandbox',
        getOAuthToken: cb => { cb(token); }
      });
    
      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });
    
      // Playback status updates
      player.addListener('player_state_changed', state => {
        if (state.position > 0 && state.position < 500) {
          console.log('dirty state', state)
        } else {
          console.log(state)
          this.playerState.next(state);
        }
      });
    
      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log(`Player Ready with ID: ${device_id}`)
      });
    
      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
    
      // Connect to the player!
      player.connect();
    };
  }

  loadSdkScript() {
    let node = document.createElement('script');
    node.src = "https://sdk.scdn.co/spotify-player.js";
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('body')[0].appendChild(node);
  }

  play(): Observable<any> {
    return this.http.put('https://api.spotify.com/v1/me/player/play', null);
  }

  pause(): Observable<any> {
    return this.http.put('https://api.spotify.com/v1/me/player/pause', null);
  }

  changePosition(position): Observable<any> {
    let params = new HttpParams().append("position_ms", position);
    return this.http.put('https://api.spotify.com/v1/me/player/seek', null, {params: params});
  }

  toggleShuffle() {
    return this.http.put('https://api.spotify.com/v1/me/player/shuffle', null);
  }

  // TODO: add support for repeating tracks/contexts
  // repeatTrack() {
  //   let params = new HttpParams().append("state", "track");
  //   return this.http.put('https://api.spotify.com/v1/me/player/repeat', null, {params: params});
  // }

  // repeatContext() {
  //   let params = new HttpParams().append("state", "track");
  //   return this.http.put('https://api.spotify.com/v1/me/player/repeat', null, {params: params});
  // }

  // turnRepeatOff() {
  //   let params = new HttpParams().append("state", "track");
  //   return this.http.put('https://api.spotify.com/v1/me/player/repeat', null, {params: params});
  // }
  

}
