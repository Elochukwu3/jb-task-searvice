"use client";
import axios from "axios";
import { Form} from "@components-shadui/ui/form";
import { Button } from "@components-shadui/ui/button";
import {convertToObject} from "@app/(task)/(routes)/post-task/helper/convertArray";
import {FormControl,FormField,FormLabel,FormMessage, FormItem } from "@components-shadui/ui/form";
  import { Input } from "@components-shadui/ui/input";
  import {string, object, infer as zInfer} from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {debounceFunc} from "@utils/debounce";
import {useState} from "react";

const CreateLocation = () => {
    const [data, setData] = useState()
    const [err, setErr] = useState<string>()
    const inputSchema = object({
        search: string().min(1, {
          message: "Title is required",
        }),
      });

    const form = useForm<zInfer<typeof inputSchema>>({
        resolver: zodResolver(inputSchema),
        defaultValues: {
          search: "",
        },
      })
      const debouncedSearch = debounceFunc(async (searchQuery:string) => {
        try {
          const response = await axios.get(
            `https://your-search-api-endpoint?q=${searchQuery}`
          );
          console.log(response.data, searchQuery);
        } catch (error) {
          console.error("Error fetching search data:", error);
          setErr("Error fetching search data:");
        }
      }, 300);

  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div className="w-full">
        <h1 className="text-2xl text-custom-dark">
        Let&apos;s start with the basics
        </h1>
        <Form {...form}>
          <form
            className="space-y-8 mt-6"
          >
           <FormField
      control={form.control}
      name="search"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-custom-dark pb-2">
          Where do you need this done?
          </FormLabel>
          <FormControl>
            <Input
              className="boreder border-custom-greaner"
              placeholder="e.g. 'enter area or postcode"
              type="search"
              {...field}
              onChange={(value)=>{
                debouncedSearch(value)
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage  className="text-[#FF4401]"/>
        </FormItem>
          )}
          />
          {/* <Button className="bg-custom-greaner text-white" type="submit">Submit</Button> */}
          </form>
        </Form>
        {err && <span className="text-red-400 ">{err}</span>}
        {/* {data && 
        <div>{data.map(item=><div key={`select${item}`}>{item}</div>)}
        </div>
        } */}
      </div>
    </div>
   );
}
 
export default CreateLocation;


