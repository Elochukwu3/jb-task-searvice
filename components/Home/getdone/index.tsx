"use client"
import EachTree from "./EachTree";
import EachTreeTwo from "./EachTreeTwo";
import {submenu, displayObject} from "@utils/store_data/constants/getdone";
import {useState, useEffect} from "react";

const GettingDone = ()=>{
    const [display, setDisplay] = useState([])

 
    useEffect(() => {
        setDisplay(displayObject[submenu[0].id as keyof typeof displayObject]);
      }, []); 
    
      const handle = (id: any) => {
        setDisplay(displayObject[id as keyof typeof displayObject]);
        console.log(id, displayObject[id as keyof typeof displayObject]);
      };
    return(
        <div className="w-11/12 mx-auto">
             <div className="w-fit h-fit mx-auto">
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
            <div className="flex gap-4 w-fit mx-auto">
                {
                  submenu.map(({id, name}, i)=>(
                    <div onClick={()=>handle(id)} key={id + "key"} className="rounded-md p-2 mx-2 cursor-pointer border border-custom-greaner">{name}</div>
                  ))  
                }
            </div>
            {/* <EachTree {...display[objIndex -1]}/>
            <EachTreeTwo {...display[2]}/> 
            <EachTree {...display[0]}/>
            <EachTreeTwo {...display[2]}/>  */}
            {
                display.map((item, index)=>{
                    const ComponentToView = index % 2 === 0 ? EachTree : EachTreeTwo 
                    return <ComponentToView {...item} key ={item.label}/>
                })
            }
        </div>
    )
};

export default GettingDone;