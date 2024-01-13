"use client";
import { string, object, infer as zInfer } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { convertToObject } from "../helper/convertArray";
import { Button } from "@components-shadui/ui/button";


const Page = () => {
  const routes = convertToObject();
  const {handleSetter} = useSidebarContext (); 

  const inputSchema = object({
    details: string().min(1, {
      message: "field is required",
    }).min(20, {message: "field most be more than 20 "}),
  });

  const form = useForm<zInfer<typeof inputSchema>>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      details: "",
    },
  });
  const { register, handleSubmit, formState: { errors } } = form;
  const onSubmit= (value: {details: string})=>{
    console.log(value)
    if(value) handleSetter(routes?.Budget)
  }

  return (
    <div className="max-w-5xl mx-auto flex md:justify-center h-full">
      <div className="w-full">
        <h1 className="text-3xl text-custom-dark my-2 mb-5">Give additional information.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="details">What are the details?</label>
          <textarea {...register('details')} rows={5} placeholder="write summary of your details "
          className={`${errors.details ?"border-[#FF4401]": "border-custom-greaner"} my-3 focus:outline-none px-3 py-4 appearance-none h-36 shadow-none rounded-md w-full resize-none block border-2 bg-slate-200/20`}/>
          {errors.details && <p className="text-[#FF4401]">{errors.details.message}</p>}
          <div className="fixed bottom-0 flex gap-10 z-10">
            <Button type="button" onClick={()=> handleSetter(routes?.Location)} className="bg-zinc-200 text-black" >Back</Button>
            <Button className="bg-custom-greaner text-white" type="submit">Submit</Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
