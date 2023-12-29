 import {motion, AnimatePresence } from "framer-motion";
 import { testimonialVariant } from "@utils/store_data/variants/motionVariants";
 import {cardprop} from "./cardType"



const Testimonial = ({track, handleTracker}:cardprop) => {


  return (
      <div className="text-sm my-3 px-3 ">
        <p onClick={handleTracker} className="inline-flex font-semibold pb-3 text-md font-satoshi justify-between text-custom-dark">
          A Click, A Fix, A Wow – Thank You, JPPromend!<span className={` text-2xl font-montserrat font-bold pl-3 ${track ? "after:content-['-']" :"after:content-['+']"}`}></span>
        </p>
        < AnimatePresence  initial={false} mode='wait'>
        {track &&
        (<motion.div variants={testimonialVariant} exit="initial" initial="initial" animate="enter" className="relative text-white bg-custom-greaner p-4 origin-center ">
          <motion.div animate={{transition:{staggerChildren: -1, delay: 0.5}}}>
          Can I work on a project I started before the hackathon? Can I work on
          a project I started before the hackathon
          </motion.div>
        </motion.div>)}
        </ AnimatePresence>
      </div>
  );
};
export default Testimonial