import { Dispatch } from 'redux';
import * as types from './types/login';
import { ILoginProps } from '../types/login';
// import axios from 'axios';

export function loginRequest(payload: ILoginProps) {
  return (dispatch: Dispatch) => {
    /* IT NEED TO BE FROM API BUT FOR TESTING I USED LOCAL VALIDATION */

    // TODO: Make axios to generation for http methods and move it to global
    // axios.post('http://localhost:3001/login', payload)
    // .then((response)=>{
    if (payload.username === 'admin@axiongroup.com' && payload.password === 'admin@axiongroup.com') {
      dispatch({
        type: types.LOGIN_REQUEST_SUCCESS,
        name: 'Admin',
      });
    } else {
      dispatch({
        type: types.LOGIN_REQUEST_FAIL,
        error: 'Invalid username or password',
      });

      // To auto hide if any error messages in  the state
      setTimeout(() => {
        dispatch({
          type: types.RESET_FORM,
        });
      }, 2500);
    }

    // })
    // .catch((error)=>{
    //     console.log("There is no user with the given username and password");
    // })
  };
}

export function logout() {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.LOGOUT_REQUEST_SUCCESS });
  };
}
