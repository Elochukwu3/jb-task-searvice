"use client";
import { number, object, infer as zInfer } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { convertToObject } from "../helper/convertArray";
import { Button } from "@components-shadui/ui/button";


const Page = () => {
  const routes = convertToObject();
  const {handleSetter} = useSidebarContext (); 

  const inputSchema = object({
   budget: number().int().refine(value => value >= 1000 && value <= 100000, {
    message: "must be between 1000 and 100000",
  }),
  });

  const form = useForm<zInfer<typeof inputSchema>>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      budget: 0,
    },
  });
  const { register, handleSubmit, formState: { errors, isValid , isSubmitting } } = form;
  const onSubmit= (value: {budget: number})=>{
    console.log(value)
    if(value) handleSetter(routes?.Budget)
  }

  const handlekey = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (!/[0-9]/.test(e.key) && e.key !== "Enter" && e.key !== "Backspace" && !(e.ctrlKey && e.key === "a")) {
        e.preventDefault();
  }
  }
  
  return (
    <div className="max-w-5xl mx-auto flex md:justify-center h-full">
      <div className="w-full text-custom-dark">
        <h1 className="text-3xl text-custom-dark my-2 mb-5">Suggest your budget</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="budget">What is your budget?</label>
            <p className="text-sm py-3">Feel free to negotiate the final price.</p>
   <div className={`${errors.budget ? "border-[#FF4401]": "border-custom-greaner/40"} "flex h-10 items-center  w-full px-2 rounded-md border  bg-background 
             text-sm "`}>
    <span> ₦</span>
          <input onKeyDown={handlekey}
  {...register("budget", {
    setValueAs: (value) => Number(value),
  })} placeholder="enter budget" className="w-11/12 h-full px-3 py-2 focus-visible:outline-none placeholder:text-muted-foreground"/>
            </div>
          {errors.budget && <p className="text-[#FF4401]">{errors.budget.message}</p>}
          <div className="fixed bottom-0 flex gap-10 z-10">
            <Button type="button" onClick={()=> handleSetter(routes?.Details)} className="bg-zinc-200 text-black" >Back</Button>
            <Button disabled={!isValid || isSubmitting} className="bg-custom-greaner text-white" type="submit">Continue</Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
