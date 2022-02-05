import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { getImages, getTagImages} from '../api';

const OuterCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 90vw;
    background-color: green;
    padding: 14vh 5vw 6vh 5vw;
`
const PhotoComponent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: pink;
    height: 100%;
    width: 100%;
`
const PhotoMenuBar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: yellow;
    width: 100%;
    height: 7%;
`
const MenuBarButton = styled.button`
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
    margin-right: 2px;
    border: none;
    &:hover{
        background-color: #e7e7e7;
        color: black;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`

const Photos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 93%;
`

const PhotoReel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;
    width: 86%;
    height: 98%;
    padding: 1% 7% 1% 7%;
    `

const RightButton = styled.button`
    height: 5%;
    width: 5%;
    margin-left: -5%;
    z-index: 4;
`
const LeftButton = styled.button`
    height: 5%;
    width: 5%;
    margin-right: -5%;
    z-index: 4;
`

const ImageBox = styled.div`
    display: flex;
    width: 25%;
    height: 50%;
    overflow: hidden;
`

const Picture = styled.img`
    object-fit: contain;
    height: 96%;
    width: 96%;
    padding: 2%;
`

function Work() {
    
    const [images, setImages] = useState([])
    const [prevImages, setPrevImages] = useState([])
    const [nextCursor, setNextCursor] = useState(null);
    const [nextCursorList, setNextCursorList] = useState([]);
    const [imageTag, setImageTag] = useState(null)

    useEffect(() => {
		const fetchData = async () => {
			const responseJson = await getImages(imageTag, 8, null);
			setImages(responseJson.resources);
			setNextCursor(responseJson.next_cursor);
		};
		fetchData();
        setPrevImages([])
        setNextCursorList([])
        //console.log(images)
	}, [imageTag]);

    const handleLoadForwardButtonClick = async () => {
		const responseJson = await getImages(imageTag, 8, nextCursor);
        setPrevImages((currentPrev) => 
            [...currentPrev, images,]
        );
        setNextCursorList((current)=>
            [...current, nextCursor]
        );
        //console.log(nextCursorList)
		setImages((currentImageList) => [
			...responseJson.resources,
		]);
		setNextCursor(responseJson.next_cursor);
	};

    const handleLoadBackButtonClick = () =>
    {
        setImages(prevImages[prevImages.length - 1])
        //console.log("Back Delete from")
        //console.log(nextCursorList)
        setNextCursor(nextCursorList[nextCursorList.length - 1])
        setPrevImages((imageArrays) => imageArrays.filter((_, i) => i !== imageArrays.length - 1))
        setNextCursorList((cursors) => cursors.filter((_, i) => i !== cursors.length - 1))
	};

    const handleAllPhotosSelected = async () => {
		const responseJson = await getImages(imageTag, 8, null);
        setPrevImages((currentPrev) => 
            []
        );
        setNextCursorList((current)=>
            []
        );
        //console.log(nextCursorList)
		setImages((currentImageList) => [
			...responseJson.resources,
		]);
		setNextCursor(responseJson.next_cursor);
	};

    // const reloadPhotos = async () => {
	// 	const responseJson = await getImages(imageTag, 8, null);
    //     setPrevImages((currentPrev) => 
    //         []
    //     );
    //     setNextCursorList((current)=>
    //         []
    //     );
    //     //console.log(nextCursorList)
	// 	setImages((currentImageList) => [
	// 		...responseJson.resources,
	// 	]);
	// 	setNextCursor(responseJson.next_cursor);
	// };

    return(
        <OuterCon>
            <PhotoComponent>
                <PhotoMenuBar>
                    <MenuBarButton onClick={() => setImageTag(null)}>
                        All Photos 
                    </MenuBarButton>
                    <MenuBarButton onClick={() => setImageTag("famPhotos")}> 
                        Family 
                    </MenuBarButton>
                    <MenuBarButton onClick={() => setImageTag("foodPhotos")}>
                        Food 
                    </MenuBarButton>
                    <MenuBarButton onClick={() => setImageTag("selfiePhotos")}>
                        Hair/Selfie 
                    </MenuBarButton>
                    <MenuBarButton onClick={() => setImageTag("sceneryPhotos")}>
                        Scenery 
                    </MenuBarButton>
                </PhotoMenuBar>
                <Photos>
                        { prevImages.length > 0 && (
                            <LeftButton onClick={handleLoadBackButtonClick}>
                                Prev Page 
                            </LeftButton>
                        )}
                        <PhotoReel>
                            {images.map((i, k) =>
                                <ImageBox>
                                    <Picture src = {i.url}/>
                                </ImageBox>
                            )}
                        </PhotoReel>
                        {nextCursor && (
                            <RightButton onClick={handleLoadForwardButtonClick}>
                                Next Page
                            </RightButton>
                        )}
                </Photos>
            </PhotoComponent>
        </OuterCon>
    );
}

export default Work