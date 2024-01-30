import { Metadata } from 'next'
import Image from 'next/image';
import React from 'react';
import { AboutHero, AboutHeroText } from '../aboutUs/style';



export const metadata:Metadata = {
    title: 'Become a menader | JBpromend NG',
    description: 'earn-as-mender',
}
const page = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-10 pesp'>
      <AboutHero>
      <div className='flex-1 space-y-5'>
        <AboutHeroText>Our actions are impacting people’s well-being</AboutHeroText>
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



