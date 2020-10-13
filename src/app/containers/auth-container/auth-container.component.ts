import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

import * as actions from '../../store/actions/index'

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
export class AuthContainerComponent implements OnInit {

  accessToken: string;
  refreshing: boolean = false;
  
  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute,
    private cookieService: CookieService 
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('code')) {
        this.authService.exchangeCode(params.get('code'));
      }
    })

    this.authService.accessToken.subscribe(token => {
      this.accessToken = token;
    })

    if (!this.accessToken && this.cookieService.get('refreshToken')) {
      this.refreshing = true;
      this.authService.refresh();
    }

  }

}
