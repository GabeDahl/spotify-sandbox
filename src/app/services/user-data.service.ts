import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../store/models/user.model';
import { TopTracks } from '../store/models/top-tracks.model'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<User> {
    return this.http.get('https://api.spotify.com/v1/me')
  }

  getUserTopTracks(limit: number, timeRange?: string): Observable<TopTracks> {
    if (!timeRange) {
      return this.http.get<TopTracks>(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}` )
    } else {
      return this.http.get<TopTracks>(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${timeRange}`)
    }
  }

  getUserTopArtists(): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/me/top/artists')
  }
}
