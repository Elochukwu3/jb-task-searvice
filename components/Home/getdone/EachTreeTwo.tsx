import MdTree from "./MdTree";
import {pageProp} from "./type";
import Image from "next/image";

const EachTreeTwo = ({item}:{item:pageProp[]})=>{
    return(
        <div>
        {item.map(({header, text, label, image})=>(
            <div key={label} className="w-fit mx-auto hidden md:block">
            <div className="flex mb-[11px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                  <div className="text-bg-custom-dark w-[40%] text-right mb-[12px] mont text-[24px] font-[700]">
                     {label}
                  </div>
                  <div className="w-[53px] object-contain overflow-hidden relative  h-[53px] rounded-full">
                      <Image src={image} alt="" fill />
                  </div>
                  <div className="w-[40%]">
                      <div className="text-bg-custom-dark text-left mb-[12px] mont text-[24px] font-[700]">
                          {header}
                      </div>
                      <div className="text-left text-[14px] font-[400] leading-[170.9%]">
                         {text}
                      </div>
                  </div>
              </div>
            
              <div className="flex mb-[40px] lg:space-x-[86px] md:space-x-[50px] w-full items-center">
                  <div className="w-[40%]"/>
                  <div className="h-[53px] w-[53px]">
                      <div className="mx-auto mb-[11px] w-[4px] pb-[86px] bg-custom-dark"/>
                  </div>
                  <div className="w-[40%] mb-[5px]"></div>
              </div>
      </div>
        ))}
        <MdTree item={item}/>
        </div>
    )
}
export default EachTreeTwo