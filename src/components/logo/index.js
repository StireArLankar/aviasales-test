import React from 'react'
import Logo from './logo.png'

const Wrapper = props => {
  return <img src={Logo} alt={`logo`} className={`app__logo`}/>
}

export default Wrapper;