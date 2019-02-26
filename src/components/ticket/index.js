import React from 'react';
import Logo from './logo';
import Button from './button';
import Place from './place';
import Stops from './stops';

import './style.scss';

import prefix from './_prefix';

const Ticket = ({ data }) => {
  const from = {
    city: data.origin,
    name: data.origin_name,
    date: data.departure_date,
    time: data.departure_time,
  }

  const to = {
    city: data.destination,
    name: data.destination_name,
    date: data.arrival_date,
    time: data.arrival_time,
  }

  return (
    <article className={`${prefix}__wrapper`}>
      <div className={`${prefix}__left-row`}>
        <Logo source={data.carrier} />
        <Button price={data.price} />
      </div>
      <div className={`${prefix}__right-row`}>
        <Place data={from} align={`left`} />
        <Place data={to} align={`right`} />
        <Stops stops={data.stops} />
      </div>
    </article>
  );
}

export default Ticket;
