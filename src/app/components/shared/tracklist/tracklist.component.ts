import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/store/models/track.model';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  @Input()
  trackList: Track[]

  constructor() { }

  ngOnInit(): void {
  }

}
