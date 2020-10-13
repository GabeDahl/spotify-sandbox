import { Component, Input, OnInit } from '@angular/core';
import { PlayerState } from 'src/app/store/models/player-state.model';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.css']
})
export class PlayerControlsComponent implements OnInit {

  @Input()
  playerState: PlayerState

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.playerState)
  }

}
