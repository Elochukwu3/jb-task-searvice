import MdTree from "./MdTree";
import {pageProp} from "./type";
import Image from "next/image";
import {motion} from "framer-motion";
import { scaleY} from "./variant";
import Star from "@components/projectCard/Star";

const EachTreeTwo = ({header, text, label, image, index}:pageProp)=>{
    return(
        <motion.div variants={scaleY}
        whileInView="animate"
      animate="animate"
      initial="initial" custom={index}
        >
            <div key={label} className="w-fit mx-auto hidden md:block">
            <div className="flex mb-[11px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                  <div className="text-bg-custom-dark w-[40%] text-right mb-[12px] mont text-[24px] font-[700]">
                     {label}
                     <span className="w-fit flex ml-auto">
                    {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} weight="fill" size={13} color="#ffd700" />
                ))}                        
             </span>
                  </div>
                  <div className="w-[53px] object-contain overflow-hidden relative  h-[53px] rounded-full">
                      <Image src={image} alt="" fill />
                  </div>
                  <div className="w-[40%]">
                      <div className="text-bg-custom-dark text-left mb-1  text-[24px] font-[700]">
                          {header}
                      </div>
                      <div className="text-left text-[14px] font-[400] leading-[170.9%]">
                         {text}
                      </div>
                  </div>
              </div>
            {index !== 3 && 
              <div className="flex  lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                  <div className="w-[40%]"/>
                  <motion.div initial={{y: 0}} className="h-[43px] w-[43px]">
                      <div className="mx-auto mb-[3px] pl-1 w-[4px] pb-[50px] bg-custom-dark"/>
                  </motion.div>
                  <div className="w-[40%] mb-[5px]"/>
              </div>
              }
      </div>
        <MdTree {...{header, text, label, image}}/>
        </motion.div>
    )
}
export default EachTreeTwo