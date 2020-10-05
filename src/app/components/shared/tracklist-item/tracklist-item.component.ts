import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/store/models/track.model';

@Component({
  selector: 'app-tracklist-item',
  templateUrl: './tracklist-item.component.html',
  styleUrls: ['./tracklist-item.component.css']
})
export class TracklistItemComponent implements OnInit {

  @Input()
  track: Track;

  @Input() 
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
