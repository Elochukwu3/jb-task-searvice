import Image from "next/image";
import { CardOverLayWrap } from "./cardStyles";
import Testimonial from "./Testimonial";
import {motion, AnimatePresence} from "framer-motion"


const CardOverlay = ({swipe, handler}:{swipe:Boolean, handler:()=> void})=>{
 
    const objectArray = [1, 2,4];
    return( 
    <CardOverLayWrap $bool={swipe}>
    <h5 className="my-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Mount a TV, art or shelves
    </h5>
     <AnimatePresence initial={false}>
     {swipe &&
    <motion.div 
    initial={{ translateX: 200 }}
      whileInView={{ translateX: 0 }}
      transition={{ duration: 1.2, delay:0, type: "spring" }} 
    className="h-40 overflow-x-scroll no-scrollbar flex gap-5 w-10/12 ml-auto bg-white">
    {objectArray.map((item, i)=>(
      <div  
      key={item} className="h-full relative w-28 rounded-md overflow-hidden shrink-0">
        <Image src="/images/banner-1.jpg" alt="card" fill  style={{objectFit: "cover"}}/>
      </div>))}
      </motion.div>
      }
     </AnimatePresence>

    <p className="text-sm p-5 text-black bg-green-50/50">
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