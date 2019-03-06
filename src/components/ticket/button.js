import React from 'react'

import prefix from './_prefix'

const Button = ({ price, symbol }) => {
  return <button className={`${prefix}__btn`}>Купить<br/>за {price} {symbol}</button>
}

export default Button;