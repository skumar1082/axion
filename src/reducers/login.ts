import { Reducer } from 'redux';
import * as types from '../action/types/login';
import { Actions, ILogin } from '../types/login';

const initialState: ILogin = {
  name: '',
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

const user: Reducer<ILogin, Actions> = (state: ILogin = initialState, action: Actions): ILogin => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        name: action.name,
      };
    case types.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        name: '',
      };
    case types.LOGOUT_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case types.RESET_FORM:
      return {
        error: '',
        isLoading: false,
        name: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export { user };
