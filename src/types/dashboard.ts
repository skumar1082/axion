import * as types from '../action/types/dashboard';

export interface IDashboard {
  headers: Array<string>;
  lineData: Array<Array<number | string>>;
  isLoading: boolean;
  isGridView: boolean;
  sortOrder: string;
  resizeTo: number;
  error: string;
}

export interface IStockDataRange {
  fromDate: Date;
  toDate: Date;
}

export interface IStockData {
  columns: Array<string>;
  rows: Array<Array<number | string>>;
  handleSort?: (idx: number) => void;
}

export type Actions =
  | {
      type: typeof types.STOCK_DATA_REQUEST;
    }
  | {
      type: typeof types.STOCK_DATA_REQUEST_SUCCESS;
      headers: Array<string>;
      lineData: Array<Array<number | string>>;
    }
  | {
      type: typeof types.STOCK_DATA_CHANGE_VIEW;
      isGridView: boolean;
    }
  | {
      type: typeof types.STOCK_DATA_REQUEST_SORT;
      lineData: Array<Array<number | string>>;
      sortOrder: string;
    }
  | {
      type: typeof types.STOCK_DATA_REQUEST_FAIL;
      error: string;
    }
  | {
      type: typeof types.RESIZE_WINDOW;
      resizeTo: number;
    };
