import { LOGIN_REQUEST, FIND_ACCOUNT_REQUEST } from './constants';

export function login(data) {
    return {
        type: LOGIN_REQUEST,
        data: data,
    }
}

export function findPartnerByAccount(id) {
    return {
        type: FIND_ACCOUNT_REQUEST,
        id: id
    }
}