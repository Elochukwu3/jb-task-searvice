import { Metadata } from 'next'
import Image from 'next/image';
import React from 'react';
import { AboutHero } from '../aboutUs/style';



export const metadata:Metadata = {
    title: 'About us | JBpromend NG',
    description: 'ask about our product',
}
const page = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-10 pesp'>
      <AboutHero>
      <div className='flex-1 space-y-5'>
        <h1 className='text-[72px] font-chela font-bod leading-[70px] pt-8 text-custom-greaner text-balance'>Our actions are impacting people’s well-being</h1>
        <p className='font-bold text-sm opac ity-40'>Creating a way to connect people ready to work, with people who need work done</p>
      </div>
    </AboutHero>
    {/* <Comp/>
    <Comp reverse={true}/>
    <AboutFaq/> */}
    </section>
  )
}

export default page



