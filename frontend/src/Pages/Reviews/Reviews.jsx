import React from 'react'
import {
  Container,
  ReviewDivider,
  ReviewImage,
  ReviewContent,
  ReviewBody,
  HR,
} from './styled-components'
import 'animate.css/animate.min.css'

const Reviews = () => {
  let images = []

  const importAll = (r) => {
    let i = []
    r.keys().map((item) =>
      i.push(
        require('../../Images/ReviewImages/' + item.replace('./', '')).default,
      ),
    )
    return i
  }

  images = importAll(
    require.context('../../Images/ReviewImages', false, /\.(png|jpe?g|svg)$/),
  )

  return (
    <Container>
      <ReviewDivider>
        <ReviewImage src={images[0]} />
        <ReviewContent>
          <ReviewBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna <b>aliqua</b>.
          </ReviewBody>
        </ReviewContent>
      </ReviewDivider>
      <HR />
      <ReviewDivider>
        <ReviewContent>
          <ReviewBody>
            Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit,{' '}
            <b>sed do eiusmod tempor</b> incididunt ut labore et dolore magna
            aliqua.
          </ReviewBody>
        </ReviewContent>
        <ReviewImage src={images[1]} />
      </ReviewDivider>
      <HR />
      <ReviewDivider>
        <ReviewImage src={images[2]} />
        <ReviewContent>
          <ReviewBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <b>labore et dolore magna aliqua</b>.
          </ReviewBody>
        </ReviewContent>
      </ReviewDivider>
    </Container>
  )
}

export default Reviews
