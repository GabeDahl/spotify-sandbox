import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects'
import * as userActions from '../actions/user.action'
import { switchMap } from 'rxjs/operators'

import { LoginService } from '../../services/login.service'

// @Injectable()
// export class UserEffects {
//     constructor(
//         private actions$: Actions, 
//         private loginService: LoginService
//     ) {}

// }