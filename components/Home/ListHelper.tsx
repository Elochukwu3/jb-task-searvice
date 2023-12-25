
import { HelperButton} from "./homeStyle";
import { motion } from "framer-motion";

const ListHelper = ()=>{
const variantMotion = {
    initial:{
        y: 100,
        opacity: 0
    },
        animate:(index:number)=>({
        y:0,
        transition: {delay: index * 0.04},
        opacity: 1
        })
}

    const jobs = ["Yard Work", "mounting","Handyman", "Electricals", "Painting", "Cleaning", "Furniture Assembly"]
    
    const listButton = jobs.map((item, index)=>(
        <motion.div
        variants={variantMotion}
        initial="initial"
        animate="animate"
        whileInView="animate"
        custom={index}
        key={item}
        >
        <HelperButton >{item}</HelperButton>
        </motion.div>
    ))
    return listButton
}
export default ListHelper