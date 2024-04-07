import React from 'react'
import Logo from './Logo'
import NavigationDesktop from './NavigationDesktop';
import CtaButton from './CtaButton';

const Header = () => {

    const navLinks = [
        {
            name: "Home",
            link: "#",
            bullet: "•"
        },
        {
            name: "About",
            link: "#",
            bullet: "•"
        }, 
        {
            name: "Services",
            link: "#",
            bullet: "•"
        },
        {
            name: "Contact",
            link: "#",
            bullet: ""
        }


    ];
        
    


  return (
    <div className='container mx-auto px-6 py-4 bg-beige'>
     <div className='flex items-center justify-between'>
     <Logo />
     <NavigationDesktop navLinks={navLinks}/>
     <CtaButton />
     </div>
    </div>
  )
}

export default Header
