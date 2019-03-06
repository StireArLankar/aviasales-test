import React from 'react'
import TK from '../../logos/TK.png'
import S7 from '../../logos/S7.svg'
import SU from '../../logos/SU.png'
import BA from '../../logos/BA.png'

import prefix from './_prefix'

const logoConverter = {
  'TK': TK,
  'S7': S7,
  'SU': SU,
  'BA': BA
}

const Logo = ({ source }) => {
  return (
    <div className={`${prefix}__logo-wrapper`}>
      <img className={`${prefix}__logo`} src={logoConverter[source]} alt={`${source}-logo`}/>
    </div>
  )
}

export default Logo;