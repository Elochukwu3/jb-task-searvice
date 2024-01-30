"use client";
import axios from "axios";
import "react-day-picker/dist/style.css"
import {useFormData}  from "./_components/_hook/useFormData";
import {FormData} from "./_components/type";
import { Form} from "@/components-shadui/ui/form";
import DatePickerForm from "./_components/Date-form"
import DescriptionForm from "./_components/Description-form";
import CheckBox from "./_components/checkbox";
import { Button } from "@/components-shadui/ui/button";
import useSidebarContext from "@/app/(task)/context/FormProvider";
import {convertToObject} from "@/app/(task)/(routes)/post-task/helper/convertArray";


const CreateTitle = () => {
  const form = useFormData() 
  const {handleSetter} = useSidebarContext (); 
  const routes = convertToObject();

  const onSubmit =(values:FormData)=>{
    if(values){
    handleSetter(routes?.Location)
      }  }

  return ( 
    <div className="max-w-5xl mx-auto flex  md:justify-center h-full">
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
            <DatePickerForm form={form}/>
            <CheckBox form={form}/>
          <Button className="bg-custom-greaner text-white" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreateTitle;


