"use client";
import axios from "axios";
import { Form } from "@components-shadui/ui/form";
import { Button } from "@components-shadui/ui/button";
import { convertToObject } from "@app/(task)/(routes)/post-task/helper/convertArray";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@components-shadui/ui/form";
import { Input } from "@components-shadui/ui/input";
import { string, object, infer as zInfer } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { debounceFunc } from "@utils/debounce";
import getlocation from "@utils/getLocation";
import { useState } from "react";
import useKeyboardKey from "@hooks/useKeyboard";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { XCircle } from "@phosphor-icons/react";
import Locations from "./Locations"

const CreateLocation = () => {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<object>({});
  const routes = convertToObject();
  const {handleSetter} = useSidebarContext (); 

  const inputSchema = object({
    search: string().min(8, {
      message: "field not filled",
    }),
  });

  const form = useForm<zInfer<typeof inputSchema>>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      search: "",
    },
  });
  const {
    handleSelection,
    focusedIndex,
    resultContainer,
    showResults,
    handleBlur,
    handleKeyDown,
  } = useKeyboardKey({
    results: data,
    onSelect: (item) => setSelected(item),
    onSearchSubmit: (searchQuery) => form.setValue("search", searchQuery),
    resetResult: (item)=> setData(item)
  });

  const debouncedSearch = debounceFunc(async (searchQuery: string) => {
    const res = await getlocation(searchQuery)
    setData(res)
  }, 300);

const onSubmit =(value:{search: string})=>{
    if(value){
        handleSetter(routes?.Details)
    }   

}

  return (
    <div className="max-w-5xl mx-auto flex md:justify-center h-full">
      <div className="w-full">
        <h1 className="text-3xl text-custom-dark my-2 ">Your Location</h1>
        <section className="grid grid-cols-2 w-full text-sm">
          <div className="w-11/12 text-center p-3 rounded-sm bg-custom-dark text-white">
            <p>In-person</p>
            <p>Select this if you need the Tasker physically there</p>
          </div>
          <div className="w-11/12 text-center p-3 rounded-sm bg-slate-300 text-custom-dark">
            <p>In-person</p>
            <p>Select this if you need the Tasker physically there</p>
          </div>
        </section>
        <Form {...form}>
          <form className="space-y-8 mt-6"
          onSubmit={form.handleSubmit(onSubmit)}
          
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem
                 
                >
                  <FormLabel className="block text-custom-dark pb-2">
                    Where do you need this done?
                  </FormLabel>
                  <div
                    tabIndex={1}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                  >

                  
                  <div className="flex relative">
                  <FormControl>
                    <Input
                      className="boreder border-custom-greaner"
                      placeholder="e.g. 'enter area or postcode"
                      autoComplete="off" 
                      {...field}
                      onChange={(event) => {
                        const value = event.target.value;
                        field.onChange(value);
                        debouncedSearch(value);
                      }}
                    />
                  </FormControl>
                    <span className="inset-y-0 items-center flex absolute right-3" onClick={()=> form.setValue("search", "")}>
                    <XCircle size={16} color="#3e3d3b" weight="bold" />
                    </span>
                    </div>
                  <FormMessage className="text-[#FF4401]" />
                  {showResults && <Locations data={data} handleSelection={handleSelection} focusedIndex={focusedIndex} resultContainer={resultContainer} />}

                  </div>
                </FormItem>
              )}
            />
            <div className="fixed bottom-0 flex gap-10 z-10">
            <Button type="button" onClick={()=> handleSetter(routes?.titleDate)} className="bg-zinc-200 text-black" >Back</Button>
            <Button className="bg-custom-greaner text-white" type="submit">Submit</Button>
            </div>
          </form>
        </Form>
        
          {!selected && form.formState.touchedFields.search && form.formState.isDirty && !showResults && (
          <span className="text-red-400 ">Field is required</span>
        )}
      </div>
    </div>
  );
};

export default CreateLocation;
