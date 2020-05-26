import { Reducer } from 'redux';
import * as types from '../action/types/dashboard';
import { Actions, IDashboard } from '../types/dashboard';
import { getResolution } from '../util/common';

const initialState: IDashboard = {
  headers: [],
  lineData: [],
  isLoading: false,
  isGridView: true,
  sortOrder: 'desc',
  resizeTo: getResolution(),
  error: '',
};

const dashboard: Reducer<IDashboard, Actions> = (state: IDashboard = initialState, action: Actions): IDashboard => {
  switch (action.type) {
    case types.STOCK_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.STOCK_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        headers: action.headers,
        lineData: action.lineData,
      };
    case types.STOCK_DATA_CHANGE_VIEW:
      return {
        ...state,
        isGridView: state.isGridView ? false : true,
      };
    case types.STOCK_DATA_REQUEST_SORT:
      return {
        ...state,
        lineData: action.lineData,
        sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc',
      };
    case types.STOCK_DATA_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case types.RESIZE_WINDOW:
      return {
        ...state,
        resizeTo: action.resizeTo,
      };
    default:
      return state;
  }
};

export { dashboard };
