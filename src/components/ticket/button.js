import React from 'react';

import prefix from './_prefix';

const Button = ({ price }) => {
  return <button className={`${prefix}__btn`}>Купить<br/>за {price}</button>
}

export default Button;