import React from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NavHome/NavHome';
import { ButtonHome } from '../../UI/ButtonHome/ButtonHome';


export const HeaderHome = () => {
  return (
    <header className='headerHome'>
      <Logo />
      <NavHome />
      <ButtonHome />
    </header>
    
  )
}
