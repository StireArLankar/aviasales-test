import React, { Fragment } from 'react';
import Button from './button';

import prefix from './_prefix.js';

const currencyList = [`RUB`, `USD`, `EUR`];

const Currency = ({currency, onChange}) => {
  const onClick = (evt) => {
    onChange(evt.target.textContent)
  }

  const renderButtons = () => {
    return currencyList.map(cur => {
      return (
        <li key={cur} className={`${prefix}__currency-item`}>
          <Button name={cur} active={cur === currency} onClick={onClick}/>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <h3 className={`${prefix}__subtitle`}>Валюта</h3>
      <ul className={`${prefix}__currency-list`}>{renderButtons()}</ul>
    </Fragment>
  );
};

export default Currency;
