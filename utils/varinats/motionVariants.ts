
const btnVariant = {
    close: {
      y: -10,
    },
    open: {
      y: [0, -5, 0,-5, 0],
      transition: {
        duration: 0.9,
        delay: 0,
        type: "tween",
      },
    },
  };
  ///testimonial variant
  const testimonialVariant={
    initial:{
      transition:{
        ease: [0.83, 0, 0.17, 1],
        bounce: 0.001,
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
        when: 'beforeChildren'
      },
    },
  }
  export {btnVariant, testimonialVariant}