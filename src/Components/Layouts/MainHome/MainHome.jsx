import React from 'react'
import { ImagesContainer } from '../../UI/ImageContainer/ImagesContainer'
import { ImagePrincipalMain } from '../../UI/ImagePrincipalMain/ImagePrincipalMain'
import { LogosMain } from '../../UI/LogosMain/LogosMain'
import { TitleMain } from '../../UI/TitleMain/TitleMain'

export const MainHome = () => {
  return (
    <main className='main-Content'>
        <TitleMain />
        <ImagePrincipalMain />
        <LogosMain />
        <ImagesContainer />
    </main>
  )
}
