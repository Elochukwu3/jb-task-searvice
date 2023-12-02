import {pageProp} from "./type";
import Image from "next/image";

const MdTree = ({header, text, label, image}: pageProp)=>{
  

    return (  <div >
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
            </div>
        </div>
    </div>
    )
};

export default MdTree;