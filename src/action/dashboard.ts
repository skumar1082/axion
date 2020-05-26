import * as types from './types/dashboard';
import { Dispatch } from 'redux';
import axios from 'axios';
import { dateToYMD, decimalFormat } from '../util/common';
import { IStockDataRange } from '../types/dashboard';
import { getResolution } from '../util/common';
import { Actions } from '../types/dashboard';

export function getStockData(payload: IStockDataRange) {
  requestStockData();
  return (dispatch: Dispatch) => {
    /* DYNAMIC FETCHING IS NOT WORKING DUE TO CORS BLOCKED IN FINANCE.YAHOO.COM SO, I WILL MAKE IT LOCAL*/
    // const fromDate =  Math.floor(new Date().setFullYear(new Date().getFullYear()-1)/1000);
    // const toDate =  Math.floor(new Date().getTime() / 1000);
    // let dataURL = `https://query1.finance.yahoo.com/v7/finance/download/%5EGSPC?period1=${fromDate}&period2=${toDate}&interval=1d&events=history`
    const dataURL = 'http://localhost:3000/data/gspc.csv';
    // TODO: Make axios to generation for http methods and move it to global
    axios
      .get(dataURL)
      .then((response) => {
        let headers: Array<string>,
          lines: Array<Array<number | string>> = [];
        const stockFields = response.data.split(/\r\n|\n/);
        headers = stockFields[0].split(',');
        headers.splice(5, 1);

        for (let i = 1; i < stockFields.length; i++) {
          const dataItem = stockFields[i].split(',');
          dataItem.splice(5, 1);
          if (dataItem.length === headers.length) {
            const stockValues: Array<number | string> = [];
            for (let j = 0; j < headers.length; j++) {
              if (j === 0) {
                stockValues.push(dateToYMD(new Date(dataItem[j])));
              } else {
                stockValues.push(decimalFormat(parseFloat(dataItem[j])));
              }
            }
            lines.push(stockValues);
          }
        }
        dispatch({
          type: types.STOCK_DATA_REQUEST_SUCCESS,
          headers,
          lineData: lines,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.STOCK_DATA_REQUEST_FAIL,
          error: 'There is a problem in stock data fetch',
        });
      });
  };
}

const sort = (columnIdx: number, stockData: Array<Array<number | string>>, sortOrder: string) => {
  const sortedActivities = stockData.sort((a, b) => {
    if (columnIdx === 0) {
      if (sortOrder === 'desc') {
        return new Date(b[0]).valueOf() - new Date(a[0]).valueOf();
      } else {
        return new Date(a[0]).valueOf() - new Date(b[0]).valueOf();
      }
    } else if (sortOrder === 'asc') {
      return parseFloat(String(a[columnIdx])) - parseFloat(String(b[columnIdx]));
    } else {
      return parseFloat(String(b[columnIdx])) - parseFloat(String(a[columnIdx]));
    }
  });
  return sortedActivities;
};

export function requestSort(columnIdx: number, lineData: Array<Array<number | string>>, sortOrder: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.STOCK_DATA_REQUEST_SORT,
      lineData: sort(columnIdx, lineData, sortOrder),
    });
  };
}

function requestStockData() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.STOCK_DATA_REQUEST,
    });
  };
}

export function changeView() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.STOCK_DATA_CHANGE_VIEW,
    });
  };
}

export function resizeWindow() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: types.RESIZE_WINDOW,
      resizeTo: getResolution(),
    });
  };
}
