import { Metadata } from 'next'
import Image from 'next/image';
import React from 'react';


export const metadata:Metadata = {
    title: 'About us | JBpromend NG',
    description: 'ask about our product',
}
const page = () => {
  return (
    <section className='max-w-7xl mx-auto pesp'>
      <div className='min-h-[60vh] w-11/12 rounded-md mx-auto flex justify-between p-6 bg-[#F9F3EF] '>
      <div className='flex-1 space-y-5'>
        <h1 className='text-6xl font-clash font-extrabold px-6 text-black text-balance'>We&apos;re making a difference to people&apos;s lives</h1>
        <p>Creating a way to connect people ready to work, with people who need work done</p>
      </div>
      <div className="min-h-[240px] min-w-80 flex-1">
        <Image
        src={"https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"}
        height={300}
        width={300}
        sizes='200px'
        alt='image-git'
        style={{ filter: 'invert(2), brightness(10)'}}
        />
        <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={300}
        width={300}
        sizes='200px'
        alt='image-git'
        className='filter-0 hue-rotate-18 saturate-100 sepia brightness-100'
        />
        {/* <Image
        src={"https://github.githubassets.com/assets/shape-0-df97fa6b0c27.svg"}
        height={300}
        width={300}
        sizes='200px'
        alt='image-git'
        className='filter-0 hue-rotate-18 saturate-100 sepia brightness-100'
        /> */}
        {/* <YourComponent/> */}
      </div>
    </div>
    </section>
  )
}

export default page


const YourComponent = () => {
  return (
    <div className="flex items-start min-w-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        {/* Central Circle */}
        <circle cx="300" cy="300" r="50" fill="#0d7a5f" />
        {Array.from({ length: 6 }).map((_, index) => (
          <g key={index} transform={`rotate(${index * 60} 300 300)`}>
            <line x1="300" y1="300" x2="450" y2="300" stroke="#2ecc71" strokeWidth="2" />
            <circle cx="450" cy="300" r="20" fill="white" />
          </g>
        ))}
      </svg>
    </div>
  );
};
