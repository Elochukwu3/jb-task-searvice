import {pageProp} from "./type";
import Image from "next/image";
import {motion} from "framer-motion";
import {scaleY} from"./variant";
import Star from "@components/projectCard/Star"

const MdTree = ({header, text, label, image, index}: pageProp)=>{
  
    return (  <motion.div 
        variants={scaleY}
        whileInView="animate"
      initial="initail" custom={index}>
        <div className="md:hidden pl-[19px] border-l-[2px] border-custom-dark">
            <div className="text-custom-dark mb-[13px] mont  font-[700]">
                {header}
            </div>
            <div className=" mb-[7.05px] mont  font-[400] leading-[159.9%]">
                {text}
            </div>
        </div>
        <div className="flex md:hidden mb-[27px] items-center">
            <div
                className="w-[26.32px] relative left-[-9px] object-contain overflow-hidden rounded-full h-[26.32px]">
                <Image src={image} alt="" fill />
            </div>
            <div className="text-custom-dark mont  font-[700]">
                {label}    
                <span className="w-fit flex text-gold-900">
                    {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} weight="fill" size={11} color="#ffd700" />
                ))}                        
                         </span>
            </div>
        </div>
    </motion.div>
    )
};

export default MdTree;