/*
 * Author: Saravanakumar
 * Description: The Cardview component is state less and it works only based on array conditions and return complete data cards based on data input
 * TODO: Need to make more dynamic on data process instead of static data section from array and need to add css animations
 */
import React from 'react';
import { IStockData } from '../types/dashboard';

const Cardview = (props: IStockData) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      {props.rows &&
        props.rows.map((lineItem, idx) => {
          return (
            <div key={`card_${idx}`} className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
              <div className="card-header font-weight-bold">{lineItem[0]}</div>
              <div className="card-body">
                <h6 className="card-title font-weight-bold">{`${props.columns[1]}: $${lineItem[1]}`}</h6>
                <p className="card-text">{`${props.columns[2]}: $${lineItem[2]}`}</p>
                <p className="card-text">{`${props.columns[3]}: $${lineItem[3]}`}</p>
                <p className="card-text">{`${props.columns[4]}: $${lineItem[4]}`}</p>
                <p className="card-text">{`${props.columns[5]}: ${lineItem[5]}`}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cardview;
