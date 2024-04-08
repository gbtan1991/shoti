import React from 'react'

const NavList = ({navLinks}) => {
  return (
    <div className='flex flex-row gap-3 text-light-red text-xl font-granstander'>
        {navLinks.map((nav, index) => (
          <ul key={index}>
            <li><a href={nav.link}>{nav.name} {nav.bullet}</a></li>            
            
          </ul>
        ))}
    </div>
  )
}

export default NavList
