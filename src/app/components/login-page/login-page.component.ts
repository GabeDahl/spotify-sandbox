import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginSuccess } from 'src/app/store/actions/user.action';
import { User } from 'src/app/store/models/user.model';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.detectURLAuthCode();
  }

  user: User = {
    display_name: "lmao",
  }

  login() {
    this.loginService.login();
  }

}
