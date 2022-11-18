import React from 'react'

import imagen1 from '../../../Images/santorini.jpg'
import imagen2 from '../../../Images/orlando-ee-uu.jpg'
import imagen3 from '../../../Images/roma-italia.jpg'
import imagen4 from '../../../Images/tailandia.jpg'
import imagen5 from '../../../Images/croacia.jpg'
import imagen6 from '../../../Images/nueva-york.jpg'


export const ImagesContainer = () => {
  return (
    <div className='gallery-container'>

        <div className='gallery__item'>
          <img className='gallery__img' src={imagen1} alt="Santorini Beach" />
          <h2 className='gallery__title'>Santorini Beach</h2>
        </div>
        
        <div className='gallery__item'>
          <img className='gallery__img' src={imagen2} alt="Orlando, EE.UU" />
          <h2 className='gallery__title'>Orlando, EE.UU</h2>
        </div>

        <div className='gallery__item'>
          <img className='gallery__img' src={imagen3} alt="Roma, Italia" />
          <h2 className='gallery__title'> Roma, Italia</h2>
        </div>

        <div className='gallery__item'>
          <img className='gallery__img' src={imagen4} alt="Tailandia" />
          <h2 className='gallery__title'>Tailandia</h2>
        </div>

        <div className='gallery__item'>
          <img className='gallery__img' src={imagen5} alt="Croacia" />
          <h2 className='gallery__title'>Croacia</h2>
        </div>

        <div className='gallery__item'>
          <img className='gallery__img' src={imagen6} alt="Nueva York, EE.UU" />
          <h2 className='gallery__title'>Nueva York, EE.UU</h2>
        </div>
    </div>
  )
}
