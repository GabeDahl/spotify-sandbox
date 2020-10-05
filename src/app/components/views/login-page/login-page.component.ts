import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { fadeIn, slideRight, slideLeft } from '../../../animations/animations' 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [fadeIn, slideLeft, slideRight]
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
