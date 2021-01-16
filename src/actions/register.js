import { REGISTER_REQUEST } from './constants';

export function register(data) {
    return {
        type: REGISTER_REQUEST,
        data: data,
    }
}

export function findRegisterById(data) {
    return {
        type: FIND_REGISTER_REQUEST,
        data: data,
    }
}