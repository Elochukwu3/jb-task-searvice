import { Metadata } from 'next'
import React from 'react';


export const metadata:Metadata = {
    title: 'About us | JBpromend NG',
    description: 'ask about our product',
}
const page = () => {
  return (
    <section className='max-w-7xl mx-auto '>
      <div className='min-h-[60vh] w-11/12 rounded-md mx-auto flex justify-between p-6 bg-[#F9F3EF] '>
      <div>
        <h1 className='text-4xl'>We&apos;`re making a difference to people&apos;`s lives</h1>
        <p>Creating a way to connect people ready to work, with people who need work done</p>
      </div>
      <div className="flex-1">
        <YourComponent/>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="image" x="0" y="0" height="100%" width="100%"
             viewBox="0 0 512 512">
      <image x="0" y="0" width="512" height="512"
             href="https://i.imgur.com/5JQJc41.png"></image>
    </pattern>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#image)" stroke="black" stroke-width="2"/>
  <g transform="translate(50,50)">
    <g transform="rotate(0)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(90)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(135)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(180)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(225)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(270)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
    <g transform="rotate(315)">
      <line x1="0" y1="0" x2="0" y2="-20" stroke="black" stroke-width="2"/>
      <circle cx="0" cy="-20" r="5" fill="black"/>
    </g>
  </g>
</svg>

      </div>
    </div>
    </section>
  )
}

export default page


const YourComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        {/* Central Circle */}
        <circle cx="300" cy="300" r="50" fill="#3498db" />

        {/* Wireframes connecting to smaller circles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <g key={index} transform={`rotate(${index * 45} 300 300)`}>
            {/* Wireframe Line */}
            <line x1="300" y1="300" x2="450" y2="300" stroke="#2ecc71" strokeWidth="2" />

            {/* Smaller Circular Image */}
            <circle cx="450" cy="300" r="20" fill="#e74c3c" />
          </g>
        ))}
      </svg>
    </div>
  );
};

