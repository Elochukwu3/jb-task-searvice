"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Checkbox } from "@/components-shadui/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components-shadui/ui/form";
import {FormType} from './type'

export default function CheckboxReactHookFormSingle({form}:FormType) {

  return (
    <FormField
      control={form.control}
      name="timeRange"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>You need a certain date range</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
}
