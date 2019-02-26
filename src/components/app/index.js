import React, { useState, useEffect } from 'react';
import Logo from '../logo';
import Filters from '../filters';
import Tickets from '../tickets';
import './style.scss';

const prefix = `app`;

const App = props => {
  const [tickets, setTickets] = useState([]);
  // const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    const url = process.env.PUBLIC_URL + '/tickets.json';

    fetch(url)
      .then(res => res.json())
      .then(({ tickets }) => {
        const temp = [...tickets].sort((a,b) => a.price - b.price).map((ticket, index) => ({...ticket, id: index}))
        setTickets(temp)
        // setFilteredTickets(temp)
      })
  }, [])

  // const filterTickets = () => {
  //   const temp = tickets.filter(ticket => true)
  //   setFilteredTickets(temp)
  // }
 
  return (
    <div className={`${prefix}__wrapper`}>
      <header className={`${prefix}__header`}>
        <Logo />
      </header>
      <main className={`${prefix}__main`}>
        <div className={`${prefix}__left-row`}>
          <Filters />
        </div>
        <div className={`${prefix}__right-row`}>
          <Tickets tickets={tickets}/>
        </div>
      </main>
    </div>
  );
}

export default App;