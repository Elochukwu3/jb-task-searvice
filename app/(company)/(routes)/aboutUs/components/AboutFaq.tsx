"use client";
import React from "react";
import useCollapseAll from "@hooks/useCollapseAll";
import { faq } from "@db/constants/faq";
import { FaqContainer } from "../style";

function AboutFaq() {
  const { collapse, handler } = useCollapseAll();
  return (
    <div className="w-[94%] max-w-[1022px] font-sora mx-auto bg-[#F9F3EF] rounded-md">
      <h2 className="text-3xl text-center font-semibold py-3">FAQ</h2>
      <span className="block mx-auto"></span>
      <div>
        <p className="text-center py-2">Frequently asked question at JBPromend</p>
        <div className="space-y-4 w-11/12 mx-auto p-2 ">
          {faq.map(({quest, ans}, i)=>(
          <FaqContainer key={`key${quest}`} onClick={() =>handler(i)}>
            <p className="py-6">{quest}</p>
            <div
              className={`overflow-hidden text-sm transition-[max-height] duration-300 ${
                collapse === i? "max-h-80" : "max-h-0"
              }`}
            >
              {ans}
            </div>
          </FaqContainer>))}
        </div>
          
      </div>
    </div>
  );
}

export default AboutFaq;

