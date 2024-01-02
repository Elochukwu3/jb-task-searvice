export const slideVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      scale: 0.1,
      transition:{
        type: "spring",
        damping: 100,
        ease: [0.250, 0.460, 0.450, 0.940]
      }
    },
    visible: {
      x: "0",
      opacity: 1,
      scale: 1,
      transition: {
        duration: .5,
        type: "spring",
        stiffness: 60,
        damping: 100,
        ease: [0.250, 0.460, 0.450, 0.940]
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.250, 0.460, 0.450, 0.940]
      },
    },
  };
  export const slideVariantstwo = {
    hidden: {
      x: "100%",
      opacity: 0,
      background: "white",
      transition:{
        type: "spring",
        damping: 100,
        ease: [0.250, 0.460, 0.450, 0.940]
      }},
    visible: {
      x: 0,
      opacity: 1,
      background: "#D1FAE5",
      transition:{
        type: "spring",
        damping: 100,
        stiffness: 60,
        ease: [0.250, 0.460, 0.450, 0.940]
      }},
  
    exit: {
      x: "100%",
      opacity: 0,
      transition:{
        type: "spring",
        ease: [0.250, 0.460, 0.450, 0.940]
      }}
    }