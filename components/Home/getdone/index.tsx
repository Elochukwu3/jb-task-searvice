"use client"
import EachTree from "./EachTree";
import {pageProp} from "./type";
import EachTreeTwo from "./EachTreeTwo";
import {submenu, displayObject} from "@utils/store_data/constants/getdone";
import {useState} from "react";

const GettingDone = ()=>{
    const [display, setDisplay] = useState<pageProp[]>(displayObject[submenu[0].id as keyof typeof displayObject])
    
      const handle = (id: any) => {
        const eachObject = displayObject[id as keyof typeof displayObject]
        setDisplay(eachObject);
      };

    return(
        <div className="w-full">
             <div className="w-11/12 mx-auto">
                <div className="w-fit mx-auto mb-[56px] md:mb-[91px]">
                    <div id="timeline"
                        className="text-custom-dark mb-[21px] md:mb-[12px] mx-auto  text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        See what others are getting done
                    </div>
                    <div className="w-fit leading-[172.4%] text-[14px] text-center md:w-[60%] mont ext-[#fff] mx-auto h-fit">
                        Here is the breakdown of the time we
                        anticipate using for the upcoming event.
                    </div>
                </div>
            </div>
            <div className="max-sm:flex-wrap flex gap-4 max-md:gap-2 w-fit mx-auto mb-8 max-sm:text-sm">
                {
                  submenu.map(({id, name}, i)=>(
                    <div onClick={()=>handle(id)} key={id + "key"} className="rounded-md p-2 max-md:p-1 mx-2 max-md:mx-0 text-wrap cursor-pointer border border-custom-greaner">{name}</div>
                  ))  
                }
            </div>
           <div className="w-11/12 mx-auto max-sm:w-[95%] bg-[#f6f5f1] font-montserrat p-5 h-[62.4vh] lg:h-auto overflow-y-scroll no-scrollbar">
           {
               display &&  display.map((item, index)=>{
                const ComponentToView = index % 2 === 0 ? EachTree : EachTreeTwo 
                return <ComponentToView {...item} index={index} key ={item.label}/>
            })
            }
           </div>
        </div>
    )
};

export default GettingDone;