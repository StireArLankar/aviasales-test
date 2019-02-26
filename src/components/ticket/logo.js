import React from 'react';

import prefix from './_prefix';

const Logo = ({ source }) => {
  return (
    <div className={`${prefix}__logo-wrapper`}>
      <div className={`${prefix}__logo`}>{source}</div>
    </div>
  )
}

export default Logo;