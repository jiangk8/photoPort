import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 92%;
  height: 100%;
  height: 80vh;
`

export const ReviewDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 90%;
  width: 30%;
  padding: 4% 1% 0% 1%;
  margin: 0% 1% 0 1%;
`

export const ReviewImage = styled.img`
  display: flex;
  object-fit: contain;
  max-width: 300px;
  max-height: 300px;
`

export const ReviewContent = styled.div`
  height: 20%;
`

export const ReviewBody = styled.p`
  text-align: center;
`

export const ReviewBodyBold = styled.p`
  font-weight: bold;
`

export const HR = styled.hr`
  border: 0;
  border-left: 0.5px solid black;
  height: 95%;
`
