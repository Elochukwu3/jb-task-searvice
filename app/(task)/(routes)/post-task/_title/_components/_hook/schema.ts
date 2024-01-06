import { object, string, date } from "zod";

export const formSchema = object({
  title: string().min(10, {
    message: "Title is required",
  }),
  ondate:date({
    required_error: "A date of birth is required.",
  }),
});
