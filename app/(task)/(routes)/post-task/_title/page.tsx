"use client";
import axios from "axios";
import "react-day-picker/dist/style.css"
import {
  Form,
} from "@components-shadui/ui/form";
import { Button } from "@components-shadui/ui/button";
import {useFormData}  from "./_components/_hook/useFormData";
import DatePickerForm from "./_components/Date-form"
import DescriptionForm from "./_components/Description-form";
import {FormData} from "./_components/type"



const CreateTitle = () => {
  const form = useFormData() 

  const onSubmit =(values:FormData)=>{
    console.log(values)
  }

  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div className="w-full">
        <h1 className="text-2xl text-custom-dark">
        Let&apos;s start with the basics
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-6"
          >
            <DescriptionForm form={form}/>
            <div className="grid grid-cols-2"><DatePickerForm form={form}/>
            <DatePickerForm form={form}/></div>
          <Button variant="secondary" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreateTitle;


