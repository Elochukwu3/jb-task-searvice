
export const variants = {
    initial:{
        x: -100,
        opacity: 0
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            type:"spring",
            stiffness: 50,
        }
        
    }
}