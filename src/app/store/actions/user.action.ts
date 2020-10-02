import { createAction, props } from '@ngrx/store'
import { User } from '../models/user.model';

export const login = createAction('[Authorization] Login');
export const loginSuccess = createAction('[Authorization] Login Success', props<User>());
export const loginFail = createAction('[Authorization] Login Fail', props());

export const refresh = createAction('[Authorization] Refresh');
export const refreshSuccess = createAction('[Authorization] Refresh Success', props<User>());
export const refreshFail = createAction('[Authorization] Refresh Fail', props());

export const fetchUser = createAction('[Authorization] Fetch User', props<User>())

export const logout = createAction('[Authorization] Logout');