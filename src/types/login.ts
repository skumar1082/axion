import * as types from '../action/types/login';

export interface ILoginProps {
  username: string;
  password: string;
}

export interface ILogin {
  name: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}

export type Actions =
  | {
    type: typeof types.LOGIN_REQUEST
  } | {
    type: typeof types.LOGIN_REQUEST_SUCCESS,
    name: string
  } | {
    type: typeof types.LOGIN_REQUEST_FAIL,
    error: string
  } | {
    type: typeof types.LOGOUT_REQUEST
  } | {
    type: typeof types.LOGOUT_REQUEST_SUCCESS
  } | {
    type: typeof types.LOGOUT_REQUEST_FAIL,
    error: string
  } | {
    type: typeof types.RESET_FORM,
    name: string,
    isLoggedIn: boolean,
    isLoading: boolean,
    error: string
  }
