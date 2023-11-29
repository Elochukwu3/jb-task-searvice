import MdTree from "./MdTree";
import {pageProp} from "./type";
import Image from "next/image";

export default function GetDone ({item}: {item:pageProp[]}){
    return(
        <div>
        {item.map(({header, text, label, image})=>(
             <div key={label} className="w-fit mx-auto hidden md:block">
             <div className="flex mb-[11px] mt-[5px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                    <div className="w-[40%]">
                        <div className="text-custom-dark text-right mb-[12px] mont text-[24px] font-[700]">
                            {header}
                        </div>
                        <div className="text-custom-dark mont text-right text-[14px] font-[400] leading-[170.9%]">
                            {text}
                        </div>
                    </div>
                    <div className="w-[53px] relative h-[53px]  rounded-full overflow-hidden">
                        <Image src={image} fill alt=""/>
                    </div>
                    <div className="text-custom-dark w-[40%] text-left mb-[12px] mont text-[24px] font-[700]">
                        {label}
                    </div>
                </div>
                <div className="flex mb-[40px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                    <div className="w-[40%] bg-custom-dark"/>
                    <div className="h-[53px] w-[53px]">
                        <div className="mx-auto mb-[11px] w-[4px] pb-[86px] bg-custom-dark"></div>
                    </div>
                    <div className="w-[40%] mb-[5px]"/>
                </div>
                    
        </div>
        ))}
        <MdTree item={item}/>
        </div>
        
    )
}