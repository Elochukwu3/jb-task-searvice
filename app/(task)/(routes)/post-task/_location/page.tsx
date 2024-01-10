"use client";
import axios, { AxiosResponse } from "axios";
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
import { useState } from "react";

export const revalidate = 10
const CreateLocation = () => {
  const [data, setData] = useState<any[]>([]);
  const [err, setErr] = useState<string>();
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
  });
  const debouncedSearch = debounceFunc(async (searchQuery: string) => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=4&countrycodes=NG`);
      setData(response.data);
    } catch (error) {
      setErr("Error fetching search data:");
    }
  }, 300);
  const handleSelectItem = (selectedValue: string) => {
    form.setValue("search", selectedValue);
    setData([]); 
  };

  return (
    <div className="max-w-5xl mx-auto flex  md:justify-center h-full p-6">
      <div className="w-full">
        <h1 className="text-3xl text-custom-dark">
          Your Location
        </h1>
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
          <form className="space-y-8 mt-6">
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
                      onChange={(event) => {
                        const value = event.target.value;
                        field.onChange(value);
                        debouncedSearch(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-[#FF4401]" />
                </FormItem>
              )}
            />
            {/* <Button className="bg-custom-greaner text-white" type="submit">Submit</Button> */}
          </form>
        </Form>
        {(err && !data) &&<span className="text-red-400 ">{err}</span>}
        {data?.length > 0 ? (
          <div>
            {data.map((item, i) => (
              <div 
              key={`select${item?.name + i}`}
              onClick={() => handleSelectItem(item?.display_name)}
             style={{ cursor: "pointer" }}
            >{item?.display_name}</div>
            ))}
          </div>
        ): <span>notfound</span>}
      </div>
    </div>
  );
};

export default CreateLocation;