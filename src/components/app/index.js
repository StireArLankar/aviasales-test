import React, { useState, useEffect } from 'react'
import { CurrencyContext } from '../context'
import Logo from '../logo'
import Filters from '../filters'
import Tickets from '../tickets'
import './style.scss'

const prefix = `app`

const App = props => {
  const [tickets, setTickets] = useState([])
  const [currency, setCurrency] = useState(`RUB`)
  const [currencyList, setCurrencyList] = useState([`RUB`])
  const [currencyRates, setCurrencyRates] = useState({'RUB': 1})
  const [filteredTickets, setFilteredTickets] = useState([])
  const [defaultStops, setDefaultStops] = useState({ Infinity: true })
  const [stops, setStops] = useState(defaultStops)

  // useEffect(() => {
  //   const url = process.env.PUBLIC_URL + '/tickets.json'

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(({ tickets }) => {
  //       const temp = [...tickets]
  //         .sort((a, b) => a.price - b.price)
  //         .map((ticket, index) => ({ ...ticket, id: index }))
  //       setTickets(temp)

  //       const stops = temp.reduce((acc, cur) => {
  //         acc[cur.stops] = false
  //         return acc
  //       }, {Infinity: true})
  //       setDefaultStops(stops)
  //       setStops(stops)

  //       setFilteredTickets(temp)
  //     })
  // }, [])

  const getTickets = async () => {
    const url = process.env.PUBLIC_URL + '/tickets.json'
    const result = await fetch(url).then(res => res.json())

    const tickets = [...result.tickets]
      .sort((a, b) => a.price - b.price)
      .map((ticket, index) => ({ ...ticket, id: index }))

    setFilteredTickets(tickets)
    setTickets(tickets)

    const stops = tickets.reduce((acc, cur) => {
        acc[cur.stops] = false
        return acc
      },{ Infinity: true })

    setDefaultStops(stops)
    setStops(stops)
  }

  const getConvertRates = async () => {
    const url = process.env.PUBLIC_URL + '/fixer.io.api.json'
    const result = await fetch(url).then(res => res.json())

    const rates = {...result.rates, 'RUB': 1}
    setCurrencyRates(rates)
    setCurrencyList(Object.keys(rates).reverse())
  }

  useEffect(() => {
    getTickets()
    getConvertRates()
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

  const onStopsChange = (stop, isOnlyThis) => {
    if (stop.toString() === `Infinity`) {
      setStops(defaultStops)
      return
    }

    if (isOnlyThis) {
      const temp = { ...defaultStops, [`Infinity`]: false, [stop]: true }
      setStops(temp)
      return
    }

    const temp = { ...stops, [stop]: !stops[stop], [`Infinity`]: false }

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
    <CurrencyContext.Provider 
      value={{
        currency, 
        currencyRates, 
        currencyList,
        setCurrency
      }}
    >
      <div className={`${prefix}__wrapper`}>
        <header className={`${prefix}__header`}>
          <Logo />
        </header>
        <main className={`${prefix}__main`}>
          <div className={`${prefix}__left-row`}>
            <Filters
              stops={stops}
              onStopsChange={onStopsChange}
            />
          </div>
          <div className={`${prefix}__right-row`}>
            <Tickets tickets={filteredTickets} />
          </div>
        </main>
      </div>
    </CurrencyContext.Provider>
  )
}

export default App
