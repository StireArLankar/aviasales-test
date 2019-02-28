import React from 'react';

import prefix from './_prefix.js';

const Button = ({ name, active, onClick }) => {
  const activeClass = active ? `${prefix}__btn--active` : ``;

  return (
    <button className={`${prefix}__btn ${activeClass}`} onClick={onClick}>{name}</button>
  );
}

export default Button;