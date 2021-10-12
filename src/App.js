// IMPORT useState
import React, { useState } from 'react';
import './styles.css';
import ImageData from "./imageData"
import Smallimg from './smallimg';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  const [bigImage, setBigImage] = useState("https://images.unsplash.com/photo-1505884065216-0661d68e5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
  const [clicked, setClicked] = useState("athens")
  const [imageClicks, setImageClicks] = useState([])

  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const smallImages = ImageData.map((element) => {
    return (<Smallimg key={element.city} {...element} clicked={clicked} onClick={clickImage} onHover={hoverImage} />)
  })
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  function clickImage(event) {
    //console.log(event.target.alt)
    const cityURL = ImageData.findIndex((element) => element.city === event.target.alt)
    setBigImage(ImageData[cityURL].img)
    //console.log(bigImage)
    setClicked(event.target.alt)
    setImageClicks([
      ...imageClicks,
      { city_selected: event.target.alt, date: new Date() }])
  }

  function hoverImage(event) {
    console.log(event.target.alt)
  
  }

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* RENDER THE IMAGES ARRAY  */}
          {smallImages}


        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        <img
          id="bigimage"
          src={bigImage}
          alt="bigimage"
        />
      </div>
    </div>
  );
}
