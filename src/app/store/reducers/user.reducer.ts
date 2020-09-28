import { UserAction, UserActionTypes } from '../actions/user.action';
import { User } from '../models/user.model'

const initialState = null

export function UserReducer(state = initialState, action: UserAction) {
    switch (action.type) {
        case UserActionTypes.LOGOUT:
            return [...state, state.user = null]
    }
}