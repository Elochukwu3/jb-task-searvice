export const scaleYVariant = {
    initial:{
        y: 100,
        opacity: 0
    },
        animate:(index:number)=>({
        y:0,
        transition: {delay: index * 0.05},
        opacity: 1
        })
};
export const bannerSvgVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition:{
        duration: 2,
        ease: "easeInOut"
      }
    }
  }