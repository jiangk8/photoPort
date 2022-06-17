import React from 'react'
import { PhotoReelHolder } from './styled-components'
import { Carousel } from 'react-carousel-minimal'

const Image = () => {
  let images = []

  const importAll = (r) => {
    let i = []
    r.keys().map((item) =>
      i.push({
        image: require('../../Images/MainScroll/' + item.replace('./', ''))
          .default,
      }),
    )
    return i
  }

  images = importAll(
    require.context('../../Images/MainScroll', false, /\.(png|jpe?g|svg)$/),
  )

  return (
    <PhotoReelHolder>
      <Carousel
        data={images}
        dots={true}
        height="80vh"
        width="90vw"
        automatic={true}
        time={3000}
        slideImageFit="cover"
        showNavBtn={false}
      />
    </PhotoReelHolder>
  )
}

export default Image
