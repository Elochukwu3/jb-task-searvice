import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata = {
    title: 'New task',
    description: 'ask about our product',
}
const page = () => {
  return (
    <div className="grid grid-cols-1fr md:grid-cols-[_1fr,50%,_1fr]">WELCOME TO MY PAGE</div>
  )
}

export default page