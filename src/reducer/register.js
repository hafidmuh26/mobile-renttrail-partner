import {
    REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST,
    FIND_REGISTER_SUCCESS, FIND_REGISTER_FAILURE, FIND_REGISTER_REQUEST,
} from '../actions/constants';

const defaultState = {
    data: null,
    loading: false,
    error: null,
};

export function register(state = defaultState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case REGISTER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findRegisterById(state = defaultState, action) {
    switch (action.type) {
        case FIND_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_REGISTER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}