import { Action, createReducer, on } from '@ngrx/store'
import * as UserActions from '../actions/user.action'
import { User } from '../models/user.model'

export interface State {
    user?: User;
}

export const initialState: State = {
    user: null
}

const userReducer = createReducer(
    initialState,
    on(UserActions.loginSuccess, (state, user) => ({...state, user: user, loading: false}))
)

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action)
}