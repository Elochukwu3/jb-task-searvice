import {jobsList} from "@/db/constants/banner"
import { HelperButton} from "./homeStyle";
import { motion } from "framer-motion";
import {scaleYVariant} from "./variant"

const ListHelper = ()=>{

    const listButton = jobsList.map((item, index)=>(
        <motion.div
        variants={scaleYVariant}
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