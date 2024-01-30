import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components-shadui/ui/form";
import { Input } from "@/components-shadui/ui/input";
import { FormType } from "./type";


const DescriptionForm = ({form}: FormType) => {
 const {isSubmitting} = form?.formState

  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-custom-dark pb-2">
            In a few words, what do you need doe?
          </FormLabel>
          <FormControl>
            <Input
              disabled={isSubmitting}
              className="boreder border-custom-greaner"
              placeholder="e.g. 'Help to clean'"
              {...field}
            />
          </FormControl>
          <FormMessage  className="text-[#FF4401]"/>
        </FormItem>
      )}
    />
  );
};

export default DescriptionForm;
