import useDropDown from "@hooks/useDropDown";
 import {motion, AnimatePresence } from "framer-motion";



const Testimonial = () => {
  const variant={
    initial:{
      transition:{
        ease: [0.83, 0, 0.17, 1],
        bounce: 0.4,
        type:"spring",
      },
      scaleY:0,
      origin: "center"
    },
    enter:{
      scaleY: 1,
      transition:{
        ease: [0.83, 0, 0.17, 1],
        bounce: 0.4,
        type:"spring",
        // duration: 2,
      },
    },
    exit:{

    }
  }
  const height = 200;
  const borderheight = `calc(${height}px * 0.05)`;
  const trangleVar= {
    initial:{
        borderColor: 'red',
        borderBottomColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: borderheight,
        borderTopColor: 'transparent',
         borderRightColor: 'white',
      borderRightWidth: 0,

    },
    enter:{
      borderRightColor: 'white',
      borderRightWidth: 0,
      borderBottomColor: 'transparent',
      borderStyle: 'solid',
      borderBottomWidth: borderheight,
      borderTopWidth: borderheight,
      borderTopColor: 'transparent',
    }
  }
 const {isDropdownOpen,  handleDropDown}= useDropDown()

  return (
      <div className="text-sm my-5 px- ">
        <p onClick={handleDropDown} className="inline-flex justify-between">
          A Click, A Fix, A Wow – Thank You, JPPromend!<span className="after:content-['+']"></span>
        </p>
        < AnimatePresence mode="sync" initial={false} >
        {isDropdownOpen &&
        <motion.div variants={variant} exit="initial" initial="initial" animate="enter" className="relative text-white bg-custom-greaner p-4 origin-center ">
        <motion.div variants={trangleVar} exit={"initial"} animate="enter"
         className="trapezium2 h-0 w-1/4 right-0 absolute top-1/2 -translate-y-1/2"/>
          <motion.div>
          Can I work on a project I started before the hackathon? Can I work on
          a project I started before the hackathon
          </motion.div>
        </motion.div>}
        </ AnimatePresence>
      </div>
  );
};
export default Testimonial