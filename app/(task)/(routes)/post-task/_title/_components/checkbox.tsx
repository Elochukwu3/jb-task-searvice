"use client";
import { useState } from "react";

import { Checkbox } from "@/components-shadui/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components-shadui/ui/form";
import { FormType } from "./type";
import SelectForm from "./select";

export default function CheckboxReactHookFormSingle({ form }: FormType) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = <T extends boolean>(value: T) => {
    setChecked(value);
  };

  return (
    <>
      <FormField
        control={form.control}
        name="timeRange"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border hover:border-custom-greaner/60 p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={(value: boolean) => {
                  handleChange(value);
                  field.onChange(value);
                }}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>You need a certain time range?</FormLabel>
            </div>
          </FormItem>
        )}
      />
      <div>{checked && <SelectForm form={form} />}</div>
    </>
  );
}
