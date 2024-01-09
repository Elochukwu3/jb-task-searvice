import { Metadata } from 'next'
import React from 'react';
import {CalendarForm} from "./test"


export const metadata:Metadata = {
    title: 'This is my about page',
    description: 'ask about our product',
}
const page = () => {
  return (
    <div>WELCOME TO MY PAGE
      <CalendarForm/>
    </div>
  )
}

export default page