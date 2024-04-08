import React from 'react'
import NavList from './NavList'

const NavigationDesktop = ({navLinks}) => {
  return (
    <div className='hidden lg:block'>
      <NavList navLinks={navLinks} />
    </div>
  )
}

export default NavigationDesktop
