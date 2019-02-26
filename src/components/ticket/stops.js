import React from 'react';

import prefix from './_prefix';

const getRussianText = (stops) => {
  const temp = stops % 10;
  if (stops === 0) return ``;
  if (stops % 100 === 11) return `${stops} пересадкок`;
  if (stops % 100 === 12) return `${stops} пересадкок`;
  if (stops % 100 === 13) return `${stops} пересадкок`;
  if (stops % 100 === 14) return `${stops} пересадкок`;
  switch (temp) {
    case 1: {
      return `${stops} пересадка`
    }
    case 2:
    case 3:
    case 4: {
      return `${stops} пересадки`
    }
    default: {
      return `${stops} пересадкок`
    }
  }
}

const Stops = ({ stops }) => {
  const text = getRussianText(stops);
  return <div className={`${prefix}__stops`}>{text}</div>
}

export default Stops;