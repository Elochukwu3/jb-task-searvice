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
        <h1>We&apos;`re making a difference to people&apos;`s lives</h1>
        <p>Creating a way to connect people ready to work, with people who need work done</p>
      </div>
      <div className="flex-1"></div>
    </div>
    </section>
  )
}

export default page