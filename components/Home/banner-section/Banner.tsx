"use client"
import {useState,useEffect,  useRef} from "react";
import Image from "next/image";
import SearchSection from "./SearchSection"
import {BannerWrapper} from "./homeStyle";
import {carousel_images} from "@db/carousel";
import {useScroll,motion, useTransform} from "framer-motion";
import {bannerSvgVariants, scaleYVariant} from "./variant"

const Banner = () => {
  const [slider, setSlider] = useState(0);

  const container = useRef<HTMLDivElement|null>(null);

  const {scrollYProgress} = useScroll({target: container, offset:["start end", "start start"]});
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const changeEvery10Minutes = () => {
    const intervalId = setInterval(() => {
      setSlider((prev) => (prev < carousel_images.length - 1 ? prev + 1 : 0));
    }, 10 * 60 * 1000); 
    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    const intervalId = changeEvery10Minutes();
    return () => clearInterval((intervalId as unknown) as NodeJS.Timeout);
  }, []); 

const words = `Bridging Gaps, Mending Needs. A Platform that Connects Skilled Menders to users in Nee-Where solutions and expertise Unite`;

  return (
    <BannerWrapper  ref={container}>
      <motion.div className="w-full mt-12 mb-10 sm:absolute relative sm:h-full h-80 "
       style={{scale}}>
        <Image src={carousel_images[slider]} 
      alt="" fill className="object-cover" 
      priority={true} 
       quality={100}
      sizes="100vw"
      />
      <svg className="absolute z-40 sm:hidden -bottom-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <motion.path variants={bannerSvgVariants} initial="hidden" animate="visible" fill="#FFFFFF" fillOpacity="1" d="M0,128L30,144C60,160,120,192,180,197.3C240,203,300,181,360,181.3C420,181,480,203,540,202.7C600,203,660,181,720,154.7C780,128,840,96,900,96C960,96,1020,128,1080,149.3C1140,171,1200,181,1260,165.3C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></motion.path>
</svg>
      <div className="flex sm:hidden items-center  bg-black/20 justify-center   z-30 absolute inset-0">
        <h2  className="bg-black/50 text-white/70 text-center rounded-md font-bold w-11/12 border-none p-4 ">
        {words.split(" ").map((word, i)=>(
          <motion.span key={`${word}words`}
        variants={scaleYVariant}
        initial="initial"
        whileInView="animate"
        className="inline-block pr-2"
        custom={(i-0.05)}
        >{word}</motion.span>
        ))}
        </h2>
      </div>
      </motion.div>
      <SearchSection isBool={true}/>
      <SearchSection/>
    </BannerWrapper>
  )
}

export default Banner