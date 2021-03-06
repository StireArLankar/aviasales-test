import React from 'react';
import Checkbox from './checkbox';

import prefix from './_prefix.js';

const stopsDict = {
  0: `Без пересадок`,
  1: `1 пересадка`,
  2: `2 пересадки`,
  3: `3 пересадки`,
  4: `4 пересадки`,
  5: `5 пересадок`
};

const Stops = ({ stops, onStopsChange }) => {

  const onChange = (value, isOnlyThis) => {
    onStopsChange(value, isOnlyThis)
  }

  const renderCheckboxes = () => {
    return Object.keys(stops).map(amount => {
      if (amount === `Infinity`) return ``
      return (
        <li key={amount} className={`${prefix}__stops-item`}>
          <Checkbox
            text={stopsDict[amount]}
            value={amount}
            active={stops[amount]}
            onChange={onChange}
          />
        </li>
      )
    })
  }

  return (
    <div  className={`${prefix}__stops`}>
      <h3 className={`${prefix}__subtitle`}>Количество пересадок</h3>
      <ul className={`${prefix}__stops-list`}>
        <li key={`all`} className={`${prefix}__stops-item`}>
          <Checkbox
            text={`Все`}
            value={Infinity}
            active={stops.Infinity}
            onChange={onChange}
          />
        </li>
        {renderCheckboxes()}
      </ul>
    </div>
  );
};

export default Stops;
