import type { infer as zInfer } from 'zod';
import {formSchema} from "./_hook/schema"
import { UseFormReturn} from "react-hook-form";



export type FormData = zInfer<typeof formSchema>;

export type FormType = {
 form: UseFormReturn<{
    title: string;
    ondate: Date;
    timeRange?: boolean;
  }, any, undefined>;
};

