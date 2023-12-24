"use client"
import { footer_links } from "@db/constants/link_list";
import useCollapseAll from "@hooks/useCollapseAll"
import { CaretDown, CaretRight, FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

const Footer = () => {
  const {collapse, handler} = useCollapseAll()
    return (
      <div className="bg-custom-dark font-montserrat mt-14 bg-footer py-10 mb-0 relative text-white ">
           <span className="text-xl left-14 max-sm:left-4  max-sm:inline max-sm:text-sm text-custom-dark top-1/4 max-sm:top-20 max-md:hidden block  absolute z-20">
                &#x2726;
              </span>
        <div className=" w-full p-4 max-lg:px-2 max-sm:px-4">
          
          <div className="space-y-3  relative grid grid-cols-6 mb-5 max-md:grid-cols-1">
          <div className="col-span-2 max-sm:col-span-1  max-md:pr-0">
            <div className="font-clash text-3xl font-bold mb-6 ">
            JBProMend
            </div>
            <p className="flex flex-col gap-10 max-sm:text-sm pr-3">
              <span>
              JBProMend is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
              </span>
              <span>
                <span>Terms of Use </span>
                <span> Privacy Policy</span>
              </span>
            </p>
          </div>
               <span className="text-xl right-10 max-sm:text-sm text-zinc-600 bottom-3/4 max-md:bottom-1/2  absolute z-20">
                &#x2726;
              </span>
               <span className="text-xl right-10 max-sm:text-sm text-zinc-600 bottom-3/4 max-md:bottom-1/2  absolute z-20">
                &#x2726;
              </span>
               <span className="text-xl right-0 m ax-sm:text-sm text-white bottom-0 max-md:bottom-1/2  absolute z-20">
                &#x2726;
              </span>
          {footer_links.map((item, i)=>(
            <div className="font-montserrat text-sm md:px-2 md:mx-auto max-sm:my-4" key={item.id}>
              {/* mobile view */}
              <div onClick={()=> handler(i)} className="hidden cursor-pointer max-sm:flex justify-between ">
              <h3 className="font-clash font-bold text-xl"> {item.header}</h3>
                {collapse === i ?
                <CaretDown size={26} color="#fffdfa" weight="bold"/> : 
                <CaretRight size={26} color="#fffdfa" weight="bold"/>
                } 
          </div>
             <h3 className="font-clash  max-sm:hidden font-bold text-[16px]"> {item.header}</h3>
             <p className={`space-y-3  my-5 max-sm:px-2  ${collapse === i ? "max-sm:block" : "max-sm:hidden"}`}>{item.list.map((list, index)=>
             (<span key={list + index} className="block text-[#CDD0DD]">{list}</span>))}
             </p>
            </div>
          ))}
          </div>
          
        </div>
        <div className="flex justify-end gap-4 px-7">
        <FacebookLogo size={26} color="#fffdfa" weight="bold" />
        <InstagramLogo size={26} color="#fffdfa" weight="bold" />
        <TwitterLogo size={26} color="#fffdfa" weight="bold" />
        <LinkedinLogo size={26} color="#fffdfa" weight="bold" />
        </div>
        <div className="text-center pt-8 pb-5 relative">
        <span className="text-xl max-sm:text-sm text-custom-highlight textt-center block pb-4">
                &#x2726;
              </span>
              <span>
              All rights reserved. © getlinked Ltd.
              </span>
          </div>
      </div>
    );
  };
  export default Footer