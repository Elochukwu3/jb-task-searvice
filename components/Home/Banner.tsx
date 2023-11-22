"use client"
import {useState, useRef} from "react";
import Image from "next/image";
import SearchSection from "./SearchSection"
import {BannerWrapper} from "./homeStyle";
import {carousel_images} from "@db/carousel";
import {useScroll,motion, useTransform} from "framer-motion";

const Banner = () => {
  const [slider, setSlider] = useState(0);

  const container = useRef<HTMLDivElement|null>(null);

  const {scrollYProgress} = useScroll({target: container, offset:["start end", "start start"]})
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
  const nextHandler = ()=>{
    setSlider(prev => prev < carousel_images.length-1 ? prev + 1 : 0)
  }
  console.log(scale, scrollYProgress)
const prevHandler = ()=>{
  setSlider((prev)=>(prev<= 0 ? carousel_images.length -1 : prev-1))
}

  return (
    <BannerWrapper  ref={container}>
      <motion.div className="w-full sm:absolute relative sm:h-full h-80" style={{scale}}>
        <Image src={carousel_images[slider]} 
      alt="" fill className="object-cover"/></motion.div>
      <div onClick={prevHandler} className="absolute cursor-pointer z-10 h-24 w-24 left-10" />
      <div onClick={nextHandler} className="absolute cursor-pointer z-10 h-24 w-24  right-10"/>
      <SearchSection isBool={true}/>
    {/* </BannerWrapper> */}
      <SearchSection/>
    </BannerWrapper>
  )
}

export default Banner