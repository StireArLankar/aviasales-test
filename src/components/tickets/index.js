import React from 'react';
import Ticket from '../ticket';
import './style.scss';

const prefix = `tickets`;

const Tickets = props => {
  return (
    <ul className={`${prefix}__list`}>
      {props.tickets.map(ticket => <li className={`${prefix}__item`} key={ticket.id}><Ticket data={ticket}/></li>)}
    </ul>
  );
}

export default Tickets;
