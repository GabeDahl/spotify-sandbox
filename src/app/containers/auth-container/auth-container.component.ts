import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
export class AuthContainerComponent implements OnInit {

  accessToken: string;
  refreshToken: string;
  loggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.loggedIn = false
  }

}
