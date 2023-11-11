"use client"
import {useState} from "react";
import SearchSection from "./SearchSection"
import {BannerWrapper} from "./homeStyle";
import {carousel_images} from "@db/carousel"

const Banner = () => {
  const [slider, setSlider] = useState(0);
  const item = [1,2,4]
  const nextHandler = ()=>{
    setSlider(prev => prev < carousel_images.length-1 ? prev + 1 : 0)
  }
const prevHandler = ()=>{
  setSlider((prev)=>(prev<= 0 ? carousel_images.length -1 : prev-1))
}
  return (
    <>
    <BannerWrapper  className="main " 
    style={{backgroundImage: `url(${carousel_images[slider]})`}}>
      <div onClick={prevHandler} className="absolute cursor-pointer z-10 h-24 w-24 left-10" />
      <div onClick={nextHandler} className="absolute cursor-pointer z-10 h-24 w-24  right-10"/>
      <SearchSection isBool={true}/>
    </BannerWrapper>
      <SearchSection/>
    </>
  )
}

export default Banner