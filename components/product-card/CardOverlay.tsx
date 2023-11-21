import Image from "next/image";
import { CardOverLayWrap } from "./cardStyles";
import Testimonial from "./Testimonial";
import {motion, AnimatePresence} from "framer-motion"


const CardOverlay = ({swipe}:{swipe:Boolean})=>{
 
    const objectArray = [1, 2,4];
    return( 
    <CardOverLayWrap $bool={swipe}>
    <h5 className="my-3 text-xl font-bold tracking-tight text-gray-900">
      Mount a TV, art or shelves
    </h5>
     <AnimatePresence initial={false}>
     {swipe &&
    <motion.div 
    initial={{x: 200 }}
    exit={{x: 200}}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2, delay:0.1, type: "spring" , bounce: 0.34}} 
    className="h-40 overflow-x-scroll no-scrollbar flex gap-5 w-11/12 ml-auto bg-white">
    {objectArray.map((item, i)=>(
      <div  
      key={item} className="h-full relative w-28 rounded-md overflow-hidden shrink-0">
        <Image src="/images/banner-1.jpg" alt="card" fill  style={{objectFit: "cover"}}/>
      </div>))}
      </motion.div>
      }
     </AnimatePresence>

    <p className="text-sm p-5 text-black bg-white dark:bg-white">
      Transform your TV troubles into triumphs with Television Mender! 🛠️
      Say goodbye to fuzzy screens and pixelated problems. Our expert team
      is here to rescue your favorite shows and movies. Fast, reliable, and
      hassle-free TV repair, right at your fingertips. Click, mend, and get
      back to binge-watching bliss! 📺✨ Visit our website now for a
      crystal-clear viewing experience! #TelevisionMender #FixItInAMinute
    </p>
    <Testimonial />
    <Testimonial />
    <Testimonial />
  </CardOverLayWrap>
  )
}
export default CardOverlay