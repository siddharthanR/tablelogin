import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/Action'

export default function Reducer(state =[], action) {
    switch(action.type) {
        case LOGIN_SUCCESS :
            return {
                ...state,
                payload:action.status
            }
            case LOGIN_FAILURE :
            return {
                ...state,
                payload:action.status
            }
        default:
            return state;
    }
}   