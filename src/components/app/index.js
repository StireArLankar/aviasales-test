import React, { useState, useEffect } from 'react';
import Logo from '../logo';
import Filters from '../filters';
import Tickets from '../tickets';
import './style.scss';

const prefix = `app`;

// const defaultStops = {
//   Infinity: true,
//   0: false, 
//   1: false,
//   2: false,
//   3: false
// }

const App = props => {
  const [tickets, setTickets] = useState([])
  const [currency, setCurrency] = useState(`RUB`)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [defaultStops, setDefaultStops] = useState({Infinity: true})
  const [stops, setStops] = useState(defaultStops)

  useEffect(() => {
    const url = process.env.PUBLIC_URL + '/tickets.json';

    fetch(url)
      .then(res => res.json())
      .then(({ tickets }) => {
        const temp = [...tickets]
          .sort((a, b) => a.price - b.price)
          .map((ticket, index) => ({ ...ticket, id: index }));
        setTickets(temp)

        const stops = temp.reduce((acc, cur) => {
          acc[cur.stops] = false
          return acc
        }, {Infinity: true})
        setDefaultStops(stops)
        setStops(stops)

        setFilteredTickets(temp)
      })
  }, [])

  // const filterTickets = () => {
  //   const temp = tickets.filter(ticket => true)
  //   setFilteredTickets(temp)
  // }

  useEffect(() => {
    if (stops[`Infinity`]) {
      setFilteredTickets(tickets)
      return
    }
    const temp = tickets.filter(ticket => stops[ticket.stops])
    setFilteredTickets(temp)
  }, [stops])

  const onCurrencyChange = currency => {
    setCurrency(currency)
  }

  const onStopsChange = (stop, isOnlyThis) => {
    if (stop.toString() === `Infinity`) {
      setStops(defaultStops)
      return
    }

    if (isOnlyThis) {
      const temp = {...defaultStops, [`Infinity`]: false, [stop]: true}
      setStops(temp)
      return
    }

    const temp = {...stops, [stop]: !stops[stop], [`Infinity`]: false}

    const isAnyChecked = Object.values(temp).reduce((acc, cur) => {
      return acc || cur
    })

    const areOthersChecked = Object.keys(temp).reduce((acc, cur) => {
      if (cur.toString() === `Infinity`) return acc
      return acc && temp[cur]
    }, true)

    if (!isAnyChecked) {
      return
    }

    if (areOthersChecked) {
      setStops(defaultStops)
      return
    }

    setStops(temp)
  }

  return (
    <div className={`${prefix}__wrapper`}>
      <header className={`${prefix}__header`}>
        <Logo />
      </header>
      <main className={`${prefix}__main`}>
        <div className={`${prefix}__left-row`}>
          <Filters
            currency={currency}
            onCurrencyChange={onCurrencyChange}
            stops={stops}
            onStopsChange={onStopsChange}
          />
        </div>
        <div className={`${prefix}__right-row`}>
          <Tickets tickets={filteredTickets} />
        </div>
      </main>
    </div>
  );
};

export default App;
