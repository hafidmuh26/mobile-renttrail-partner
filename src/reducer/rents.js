import {
  FIND_RENTS_REQUEST,
  FIND_RENTS_SUCCESS,
  FIND_RENTS_FAILURE,

  SAVE_RENT_REQUEST,
  SAVE_RENT_SUCCESS,
  SAVE_RENT_FAILURE,

  FIND_RENTSBORROWED_REQUEST,
  FIND_RENTSBORROWED_SUCCESS,
  FIND_RENTSBORROWED_FAILURE,

  FIND_RENTSDONE_REQUEST,
  FIND_RENTSDONE_SUCCESS,
  FIND_RENTSDONE_FAILURE,

  FIND_RENT_REQUEST,
  FIND_RENT_SUCCESS,
  FIND_RENT_FAILURE,

  FIND_RENTBORROWED_REQUEST,
  FIND_RENTBORROWED_SUCCESS,
  FIND_RENTBORROWED_FAILURE,
} from '../actions/constants';

const defaultState = { data: null, loading: false, error: null };

export function rents(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENTS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function rentsDone(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENTSDONE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENTSDONE_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENTSDONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function rentsBorrowed(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENTSBORROWED_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENTSBORROWED_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENTSBORROWED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function rentById(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function rentByIdBorrowed(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENTBORROWED_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENTBORROWED_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENTBORROWED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}


export function saved(state = defaultState, action) {
  switch (action.type) {
    case SAVE_RENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SAVE_RENT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case SAVE_RENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
