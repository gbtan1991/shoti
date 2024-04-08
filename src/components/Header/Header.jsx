import React from 'react'
import Logo from './components/Logo'
import NavigationDesktop from './components/NavigationDesktop';
import CtaButton from '../Header/components/CtaButton';


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
    
    <div className='flex justify-between items-center px-4 py-4 md:px-16 md:py-8 bg-beige'>
    <Logo />    
    <NavigationDesktop navLinks={navLinks} />
    <CtaButton />
   
    </div>
    
    
  )
}

export default Header
