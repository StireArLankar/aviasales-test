import React from 'react';

import prefix from './_prefix';

const formateDate = (string) => {
  let [day, month, year] = string.split('.')
  month = month - 1
  year = '20' + year
  const date = new Date(year, month, day)

  const values = {
    date: date.toLocaleDateString('ru', {year: `numeric`, month: 'short', day: 'numeric'}).split(` г.`)[0],
    weekday: date.toLocaleDateString('ru', {weekday: 'short'})
  }

  return `${values.date}, ${values.weekday[0].toUpperCase() + values.weekday.substring(1)}`
}

const Place = props => {
  const { city, name, date, time } = props.data;
  const { align } = props;

  return (
    <div className={`${prefix}__place ${prefix}__place--${align}`}>
      <p className={`${prefix}__time`}>{time}</p>
      <p className={`${prefix}__city`}>{city}, {name}</p>
      <p className={`${prefix}__date`}>{date ? formateDate(date, time) : ``}</p>
    </div>
  )
}

export default Place;