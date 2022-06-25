import React, { useState, useEffect } from 'react'
import {
  Container,
  PhotoComponent,
  PhotoMenuBar,
  MenuBarButton,
  Photos,
  PhotoReel,
  RightButton,
  LeftButton,
  Picture,
} from './styled-components'
import 'animate.css/animate.min.css'
import { getImages } from '../../api'

function Work() {
  const [images, setImages] = useState([])
  const [prevImages, setPrevImages] = useState([])
  const [nextCursor, setNextCursor] = useState(null)
  const [nextCursorList, setNextCursorList] = useState([])
  const [imageTag, setImageTag] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages(imageTag, 8, null)
      setImages(responseJson.resources)
      setNextCursor(responseJson.next_cursor)
    }
    fetchData()
    setPrevImages([])
    setNextCursorList([])
  }, [imageTag])

  const handleLoadForwardButtonClick = async () => {
    const responseJson = await getImages(imageTag, 8, nextCursor)
    setPrevImages((currentPrev) => [...currentPrev, images])
    setNextCursorList((current) => [...current, nextCursor])
    setImages((currentImageList) => [...responseJson.resources])
    setNextCursor(responseJson.next_cursor)
  }

  const handleLoadBackButtonClick = () => {
    setImages(prevImages[prevImages.length - 1])
    setNextCursor(nextCursorList[nextCursorList.length - 1])
    setPrevImages((imageArrays) =>
      imageArrays.filter((_, i) => i !== imageArrays.length - 1),
    )
    setNextCursorList((cursors) =>
      cursors.filter((_, i) => i !== cursors.length - 1),
    )
  }

  const handleAllPhotosSelected = async () => {
    const responseJson = await getImages(imageTag, 8, null)
    setPrevImages((currentPrev) => [])
    setNextCursorList((current) => [])
    setImages((currentImageList) => [...responseJson.resources])
    setNextCursor(responseJson.next_cursor)
  }

  return (
    <Container>
      <PhotoComponent>
        <PhotoMenuBar>
          <MenuBarButton onClick={() => setImageTag(null)}>
            All Photos
          </MenuBarButton>
          <MenuBarButton onClick={() => setImageTag('famPhotos')}>
            Family
          </MenuBarButton>
          <MenuBarButton onClick={() => setImageTag('foodPhotos')}>
            Food
          </MenuBarButton>
          <MenuBarButton onClick={() => setImageTag('selfiePhotos')}>
            Hair/Selfie
          </MenuBarButton>
          <MenuBarButton onClick={() => setImageTag('sceneryPhotos')}>
            Scenery
          </MenuBarButton>
        </PhotoMenuBar>
        <Photos>
          {prevImages.length > 0 && (
            <LeftButton onClick={handleLoadBackButtonClick}>
              Prev Page
            </LeftButton>
          )}
          <PhotoReel>
            {images.map((i, k) => (
              <Picture url={i.url} key={k} />
            ))}
          </PhotoReel>
          {nextCursor && (
            <RightButton onClick={handleLoadForwardButtonClick}>
              Next Page
            </RightButton>
          )}
        </Photos>
      </PhotoComponent>
    </Container>
  )
}

export default Work
