import MdTree from "./MdTree";
import {pageProp} from "./type";
import Image from "next/image";
import {variants as motionFade} from "./variant"
import { motion } from "framer-motion";

export default function GetDone ({header, text, label, image,}: pageProp){
    return(
        <div>
             <div key={label} className="w-fit mx-auto hidden md:block">
             <div className="flex mb-[11px] mt-[5px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                    <motion.div variants={motionFade} initial="initial" whileInView={"animate"} className="w-[40%]">
                        <div className="text-custom-dark text-right mb-[12px] mont text-[24px] font-[700]">
                            {header}
                        </div>
                        <div className="text-custom-dark mont text-right text-[14px] font-[400] leading-[170.9%]">
                            {text}
                        </div>
                    </motion.div>
                    <div className="w-[53px] relative h-[53px]  rounded-full overflow-hidden">
                        <Image src={image} fill alt=""/>
                    </div>
                    <div className="text-custom-dark w-[40%] text-left mb-1 mont text-[24px] font-[700]">
                        {label}
                    </div>
                </div>
                <div className="flex mb-[0px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                    <div className="w-[40%] bg-custom-dark"/>
                    <div className="h-[43px] w-[43px]">
                        <div className="mx-auto  w-[4px] pl-1 pb-[50px] bg-custom-dark"/>
                    </div>
                    <div className="w-[40%] mb-[5px]"/>
                </div>
                    
        </div>
        <MdTree {...{header, text, label, image}}/>
        </div>
        
    )
}