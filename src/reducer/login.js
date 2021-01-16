import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT_SUCCESS } from '../actions/constants';
import { FIND_ACCOUNT_FAILURE, FIND_ACCOUNT_SUCCESS, FIND_ACCOUNT_REQUEST } from '../actions/constants';

const defaultState = {
    data: null,
    loading: false,
    error: null,
};

export function loged(state = defaultState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                data: null
            };
        case LOGIN_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case LOGOUT_SUCCESS:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}

export function partnerByAccount(state = defaultState, action) {
    switch (action.type) {
        case FIND_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_ACCOUNT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_ACCOUNT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}