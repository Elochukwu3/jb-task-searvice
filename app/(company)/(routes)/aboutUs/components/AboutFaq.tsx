"use client";
import React from "react";
import useCollapseAll from "@hooks/useCollapseAll";
import { faq } from "@db/constants/faq";

function AboutFaq() {
  const { collapse, handler } = useCollapseAll();
  return (
    <div className="w-[94%] max-w-[1022px] font-sora mx-auto bg-[#F9F3EF] rounded-md">
      <h2 className="text-3xl text-center font-semibold">FAQ</h2>
      <span className="block mx-auto"></span>
      <div>
        <p className="text-center">Frequently asked question at JBPromend</p>
        <div className="space-y-4 w-11/12 mx-auto p-2 ">
          {faq.map(({quest, ans}, i)=>(
          <div key={`key${quest}`} onClick={() =>handler(i)} className="bg-[#ffffff] border-l-2 px-5 py-3 hover:border-[#ffffff] border-black hover:bg-custom-dark hover:text-[#ffffff] transition-colors duration-300 ">
            <p className="py-6">{quest}</p>
            <div
              className={`overflow-hidden text-sm transition-[max-height] duration-300 ${
                collapse === i? "max-h-80" : "max-h-0"
              }`}
            >
              {ans}
            </div>
          </div>))}
        </div>
          
      </div>
    </div>
  );
}

export default AboutFaq;

