import {  FIND_RENTS_REQUEST, 
          FIND_RENT_REQUEST,
          FIND_RENTBORROWED_REQUEST,  
          FIND_RENTSDONE_REQUEST,
          FIND_RENTSBORROWED_REQUEST,
          SAVE_RENT_REQUEST       
        } from './constants';

export function findAll(params) {
  return {
    type: FIND_RENTS_REQUEST,
    params: params,
  };
}

export function findAllBorrowed(params) {
  return {
    type: FIND_RENTSBORROWED_REQUEST,
    params: params,
  };
}

export function findAllDone(params) {
  return {
    type: FIND_RENTSDONE_REQUEST,
    params: params,
  };
}

export function rentById(id) {
  return {
    type: FIND_RENT_REQUEST,
    id : id
  }
}

export function rentByIdBorrowed(id) {
  return {
    type: FIND_RENTBORROWED_REQUEST,
    id : id
  }
}

export function save(data) {
  return {
    type: SAVE_RENT_REQUEST,
    data : data
  }
}
