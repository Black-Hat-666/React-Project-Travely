import React from 'react';
import { Ancla } from '../Ancla/Ancla';

export const NavHome = () => {
  return (
    <nav className='navHome'>
      <Ancla 
        style="ancla" 
        reference="#" 
        textAncla="Home"
      />
       <Ancla 
        style="ancla" 
        reference="#" 
        textAncla="Destination"
      />
       <Ancla 
        style="ancla" 
        reference="#" 
        textAncla="Expedition"
      />

      <Ancla 
        style="ancla" 
        reference="#" 
        textAncla="Timeline"
      />
        <Ancla 
        style="ancla" 
        reference="#" 
        textAncla="Review"
      />
        <Ancla 
        style="ancla" 
        reference="#" 
        textAncla="FAQ"
      />
    </nav>
  )
}
