import React from 'react'

const CurrencyContext = React.createContext({
  currency: 1,
  currencyList: ['RUB'],
  currencyRates: {
    'RUB': 1
  }
})

export {CurrencyContext};