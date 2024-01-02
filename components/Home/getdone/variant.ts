
export const variants = {
    initial:{
        x: -50,
        opacity: 0
    },
    animate:(index: number)=>(
        {
            x:0,
            opacity: 1,
            transition:{
                type:"tween",
                delay: index * 0.05
            }
            
        }
    )
}
export const scaleY ={
initial:{ scale: 0, opacity:0 },
animate: (index:number)=>(
    { scale: 1, opacity: 1 ,
    transition:{
        type: "tween",
        duration: .5,
        delay: index * 0.05
      }
    }
)

}
