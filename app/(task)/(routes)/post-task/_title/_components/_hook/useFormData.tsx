"use client"
import { useForm, UseFormReturn } from "react-hook-form";
import {formSchema} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {FormData} from "../type"

export const useFormData = () => {
   return useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: "",
      },
    });
   
  }