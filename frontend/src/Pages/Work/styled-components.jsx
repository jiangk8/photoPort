import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`
export const PhotoComponent = styled.div`
  display: flex;
  flex-direction: column;
`
export const PhotoMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const MenuBarButton = styled.button`
  background-color: #555555;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 12%;
  height: 100%;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`

export const Photos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 93%;
  margin-top: 20px;
`

export const PhotoReel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  width: 86%;
  height: 98%;
`

export const RightButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 200px;
  cursor: pointer;
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40px;
  box-shadow: unset;
  border: none;
`
export const LeftButton = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40px;
  box-shadow: unset;
  border: none;
  transform: rotate(180deg);
`

export const Picture = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin: 20px 20px;
`
