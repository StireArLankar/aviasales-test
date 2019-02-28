import React from 'react';
import Currency from './currency';
import Stops from './stops';
import './style.scss';

import prefix from './_prefix.js';

const Filters = ({ currency, stops, onCurrencyChange, onStopsChange }) => {
  return (
    <div className={`${prefix}__wrapper`}>
      <Currency currency={currency} onChange={onCurrencyChange}/>
      <Stops stops={stops} onStopsChange={onStopsChange}/>
    </div>
  );
}

export default Filters;