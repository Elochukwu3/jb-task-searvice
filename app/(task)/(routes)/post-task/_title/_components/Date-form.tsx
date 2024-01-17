"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components-shadui/ui/button";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components-shadui/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components-shadui/ui/popover";
import { FormType } from "./type";
import { DayPicker } from "react-day-picker";

export default function DatePickerForm({ form }: FormType) {

  return (
    <FormField
      control={form.control}
      name="ondate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-custom-dark pb-2">
            When do you need this done?
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal boreder border-custom-greaner",
                    !field.value && "text-custom-greaner/50"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick on date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align="start"
            >
              <Controller
                control={form.control}
                name="ondate"
                render={({ field }) => (
                  <DayPicker
                    mode="single"
                    className="w-full"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) => date < new Date()}
                    initialFocus
                  />
                )}
              />
            </PopoverContent>
          </Popover>
          <FormMessage className="text-[#FF4401]" />
        </FormItem>
      )}
    />
  );
}

