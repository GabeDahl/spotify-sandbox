import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { TopTracks } from 'src/app/store/models/top-tracks.model';

@Component({
  selector: 'app-affinity',
  templateUrl: './affinity.component.html',
  styleUrls: ['./affinity.component.css']
})
export class AffinityComponent implements OnInit {

  topTracksShort: TopTracks;
  topTracksMedium: TopTracks;
  topTracksLong: TopTracks;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getUserTopTracks(20, 'short_term').subscribe(res => {
      this.topTracksShort = res
    })
    this.userDataService.getUserTopTracks(20, 'medium_term').subscribe(res => {
      this.topTracksMedium = res
    })
    this.userDataService.getUserTopTracks(20, 'long_term').subscribe(res => {
      this.topTracksLong = res
    })
  }

}
