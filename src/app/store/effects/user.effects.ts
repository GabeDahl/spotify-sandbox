import { Injectable } from "@angular/core";
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects'
import * as userActions from '../actions/user.action'
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'

import { LoginService } from '../../services/login.service'
import { EMPTY, of } from "rxjs";
import { props } from "@ngrx/store";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions, 
        private loginService: LoginService
    ) {}

    detectURLCode$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.login),
        mergeMap(() => this.loginService.detectURLAuthCode()
            .pipe(
                map(val => ({type: '[Authorization] Login Success', payload: val})),
                catchError(() => of({type: '[Authorization] Login Fail'})
            )
        )
    ))
}