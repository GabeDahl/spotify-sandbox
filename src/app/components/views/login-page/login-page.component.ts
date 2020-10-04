import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { loginSuccess } from 'src/app/store/actions/user.action';
import { User } from 'src/app/store/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate('1s 1s ease-in-out')
      ])
    ]),
    trigger('slideRight', [
      state('void', style({transform: 'translate(-100vw)'})),
      transition(':enter, :leave', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('slideLeft', [
      state('void', style({transform: 'translate(100vw)'})),
      transition(':enter, :leave', [
        animate('1s ease-in-out')
      ])
    ]),
  ]
})
export class LoginPageComponent implements OnInit {
  refreshToken: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.refreshToken.subscribe(val => {
      this.refreshToken = val;
    })
  }

  login() {
    if (this.refreshToken) {
      this.authService.refresh();
      console.log('refreshing')
    } else {
      this.authService.login();
      console.log('logging in')
    }
  }

}
