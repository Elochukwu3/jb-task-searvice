"use client"
import React from 'react'
import useCollapseAll from "@hooks/useCollapseAll";

function AboutFaq() {
  const { collapse, handler } = useCollapseAll();
  return (
    <div className='w-[94%] max-w-[922px] mx-auto'>
      <h2 className='text-3xl text-center font-semibold'>FAQ</h2>
      <span className='block mx-auto'></span>
      <div>
        <p className='text-center'>Is enjoying hookah the same as smoking </p>
        <div className='border-l-2 pl-5 border-black'>
        <p className='' onClick={()=>handler(1)}>Your FAQ answer goes here.</p>
        <div className={`overflow-hidden transition-[max-height] duration-300 ${collapse ? "max-h-80" : "max-h-0"}`}>
          <p className='faq-text'>Your FAQ answer goes here.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFaq;
