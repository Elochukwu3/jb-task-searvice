import { object, string, date } from "zod";

export const formSchema = object({
  title: string()
  .nonempty({ message: "Title is required" })
  .min(10, { message: "Title must have at least 10 characters" }),
  ondate:date({
    required_error: "A date of birth is required.",
  }),
});
