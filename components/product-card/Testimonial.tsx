import useDropDown from "@hooks/useDropDown";
 import {motion, AnimatePresence } from "framer-motion";



const Testimonial = () => {
  const variant={
    initial:{
      transition:{
        delay: 2.279,
        ease: [0.83, 0, 0.17, 1],
        duration: 2,
      },
      scaleY:.9,
      origin: "center"
    },
    enter:{
      scaleY: 1,
      transition:{
        delay: 2.279,
        ease: [0.83, 0, 0.17, 1],
        duration: 2,
      },
    },
    exit:{

    }
  }
  return (
      <details className="text-sm my-5 px-5 ">
        <summary className="inline-flex justify-between">
          A Click, A Fix, A Wow – Thank You, JPPromend!<span className="after:content-['+']"></span>
        </summary>
        < AnimatePresence mode="wait">
        <motion.div variants={variant} initial="initial" animate="enter" className="text-white bg-custom-greaner p-4 origin-center ease-">
          Can I work on a project I started before the hackathon? Can I work on
          a project I started before the hackathon
        </motion.div>
        </ AnimatePresence>
      </details>
  );
};
export default Testimonial