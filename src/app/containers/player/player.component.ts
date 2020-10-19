///  <reference types="@types/spotify-web-playback-sdk"/>

import { Component, OnInit, Output } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { PlayerState } from '../../store/models/player-state.model'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerState: PlayerState;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.initializePlayer();
    this.playerService.loadSdkScript();
    this.playerService.playerState.subscribe(state => {
      this.playerState = state;
    })
  }

}
