
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
        transition: {delay: index * 0.05},
        opacity: 1
        })
}

    const jobs = ["Yard Work", "mounting","Handyman", "Electricals", "Painting", "Cleaning", "Furniture Assembly"]
    
    const listButton = jobs.map((item, index)=>(
        <motion.div
        variants={variantMotion}
        initial="initial"
        whileInView="animate"
        custom={index}
        key={item}
        viewport={{once: true}}
        >
        <HelperButton >{item}</HelperButton>
        </motion.div>
    ))
    return listButton
}
export default ListHelper