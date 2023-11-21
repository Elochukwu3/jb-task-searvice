import useDropDown from "@hooks/useDropDown";
 import {motion, AnimatePresence } from "framer-motion";



const Testimonial = () => {
  const variant={
    initial:{
      transition:{
        ease: [0.83, 0, 0.17, 1],
        // bounce: 0.1,
        // type:"spring",
        // velocity: -100
      },
      scaleY:0,
      origin: "center center"
    },
    enter:{
      scaleY: 1,
      transition:{
        ease: [0.83, 0, 0.17, 1],
        bounce: 0.4,
        type:"spring",
        // when: 'beforeChildren'

        // duration: 2,
      },
    },
    exit:{

    }
  }
  const height = 100;
  const borderheight = `calc(${height}px * 0.5)`;
  const trangleVar= {
    initial:{
        borderRightColor: 'white',
        transition: {
          duration: 1,
          // delay: 1 
          // ease: 'easeInOut',
        },
      borderStyle: 'solid',
      borderRightWidth: 80,
      borderBottom: `${20}px solid transparent`,
      borderTop: `" ${20}px solid transparent`,

    },
    enter:{
      borderRight: '0 solid white',
      borderBottom: "0 solid transparent",
      borderTop: "0 solid transparent",
        transition: {
          duration: 0.6,
          // delay: 1 
          ease: 'easeInOut',
        },
    }
  }
 const {isDropdownOpen,  handleDropDown}= useDropDown()

  return (
      <div className="text-sm my-5 px-3 ">
        <p onClick={handleDropDown} className="inline-flex justify-between">
          A Click, A Fix, A Wow – Thank You, JPPromend!<span className={`text-custom-dark text-3xl font-montserrat font-bold pl-3 ${isDropdownOpen ? "after:content-['-']" :"after:content-['+']"}`}></span>
        </p>
        < AnimatePresence  initial={false} >
        {isDropdownOpen &&
        <motion.div variants={variant} exit="initial" initial="initial" animate="enter" className="relative text-white bg-custom-greaner p-4 origin-center ">
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