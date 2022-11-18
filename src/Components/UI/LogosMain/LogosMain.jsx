import React from 'react'
import logo1 from '../../../Images/Logo-Tripadvisor.png';
import logo2 from '../../../Images/traveloka-logo.png';
import logo3 from '../../../Images/logo-brackett.png';


export const LogosMain = () => {
  return (
    <div className='containImgs'>
        <img className='logo1' src={logo1} alt="Tripadvisor" />
        <img className='logo2' src={logo2} alt="Traveloka" />
        <img className='logo3' src={logo3} alt="silhouette" />

    </div>
  )
}
