import { PROFILE_SUCCESS, PROFILE_FAILURE, PROFILE_REQUEST } from '../actions/constants';


const defaultState = {
    data: null,
    loading: false,
    error: null,
};

export function profiled(state = defaultState, action) {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case PROFILE_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}