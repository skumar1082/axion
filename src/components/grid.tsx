/*
 * Author: Saravanakumar
 * Description: This is reusable stateless function component and it used to list the data in table view
 * TODO:  Search functionality and move inline styles to css file
 */
import React from 'react';
import updownIcon from '../assets/images/updown.png';
import { IStockData } from '../types/dashboard';
// import FontAwesome from 'react-fontawesome';

/* TODO: NEED TO CONFIGURE FONTAWESOME FOR SMALL ICONS */
const Gridview = (Props: IStockData) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {Props.columns &&
            Props.columns.map((headerText, idx) => {
              return (
                <th
                  key={`th_${idx}`}
                  onClick={() => {
                    if (Props.handleSort) Props.handleSort(idx);
                  }}
                  style={{ cursor: 'pointer' }}
                  scope="col"
                >
                  {headerText}&nbsp;&nbsp;
                  <img alt="sort" width="17px" src={updownIcon} />
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {Props.rows &&
          Props.rows.map((lineItem, idx) => {
            return (
              <tr key={`row_${idx}`}>
                {lineItem.map((cell, i) => {
                  return <td key={`row_${idx}_cell${i}`}>{cell}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Gridview;
