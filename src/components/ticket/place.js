import React from 'react';

import prefix from './_prefix';

const Place = props => {
  const { city, name, date, time } = props.data;
  const { align } = props;
  return (
    <div className={`${prefix}__place ${prefix}__place--${align}`}>
      <p className={`${prefix}__time`}>{time}</p>
      <p className={`${prefix}__city`}>{city}, {name}</p>
      <p className={`${prefix}__date`}>{date}</p>
    </div>
  )
}

export default Place;