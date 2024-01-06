"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

import {
  Form,
} from "@components-shadui/ui/form";
import { Button } from "@components-shadui/ui/button";
import {useFormData}  from "./_components/_hook/useFormData";
import DatePickerForm from "./_components/Date-form"
import DescriptionForm from "./_components/Description-form"


const CreateTitle = () => {
  const form = useFormData() 

  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div className="w-full">
        <h1 className="text-2xl">
        Let&apos;s start with the basics
        </h1>
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-6"
          >
            <DescriptionForm form={form}/>
            <DatePickerForm form={form}/>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreateTitle;


