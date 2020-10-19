import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlayerState } from 'src/app/store/models/player-state.model';
import { PlayerService } from 'src/app/services/player.service';
import { fadeIn } from 'src/app/animations/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.css'],
  animations: [ fadeIn ]
})
export class PlayerControlsComponent implements OnInit {

  min: number = 0;
  positionCounter: Observable<number>;
  playerState: PlayerState;
  currentPosition: number;

  // TODO: Support Looping/Repeating songs and contexts
  // isRepeatingOnce: boolean;
  // isRepeatingContext: boolean;

  constructor(
    private playerService: PlayerService, 
    private changeDetector: ChangeDetectorRef,
    private _snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
    this.playerService.playerState.subscribe(state => {
      this.playerState = state;
      this.currentPosition = state.position;
      this.changeDetector.detectChanges();
    })
  }

  changePosition(e) {
    console.log(e.value);
    this.playerService.changePosition(e.value).subscribe(val => {
      console.log(val);
    });
    this.currentPosition = e.value;
    this.changeDetector.detectChanges();
  }

  play() {
    this.playerService.play().subscribe(val => {
      console.log(val);
    });
  }

  pause() {
    this.playerService.pause().subscribe(val => {
      console.log(val);
    });
  }

  openRepeatMessage() {
    console.log('openin')
    this._snackBar.open('This feature it not yet complete', 'DISMISS', {duration: 500});
  }

  toggleShuffle() {
    this.playerService.toggleShuffle().subscribe(val => {
      console.log(val);
    })
  }

}
