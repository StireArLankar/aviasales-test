import React, { useContext } from 'react';
import {CurrencyContext} from '../context';
import Button from './button';

import prefix from './_prefix.js';

const Currency = props => {
  const { currencyList, currency, setCurrency } = useContext(CurrencyContext);

  const renderButtons = () => {
    return currencyList.map(cur => {
      return (
        <li key={cur} className={`${prefix}__currency-item`}>
          <Button name={cur} active={cur === currency} onClick={() => setCurrency(cur)}/>
        </li>
      );
    });
  };

  return (
    <div  className={`${prefix}__currency`}>
      <h3 className={`${prefix}__subtitle`}>Валюта</h3>
      <ul className={`${prefix}__currency-list`}>{renderButtons()}</ul>
    </div>
  );
};

export default Currency;
