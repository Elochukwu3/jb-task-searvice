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
          <FormLabel>Date of birth</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
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
                    // date > new Date() || date < new Date("1900-01-01")
                    initialFocus
                  />
                )}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

import * as z from "zod";
