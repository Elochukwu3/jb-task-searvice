import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@components-shadui/ui/form";
import { Input } from "@components-shadui/ui/input";
import { FormType } from "./type";


const DescriptionForm = ({form}: FormType) => {
 const {isSubmitting} = form?.formState

  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">
            In a few words, what do you need done?
          </FormLabel>
          <FormControl>
            <Input
              disabled={isSubmitting}
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
