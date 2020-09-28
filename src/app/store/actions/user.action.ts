import { createAction } from '@ngrx/store'

export const login = createAction('[UserService] Login');
export const refresh = createAction('[UserService] Refresh');
export const logout = createAction('[UserService] Logout');