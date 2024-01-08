import { object, string, date, boolean, nativeEnum} from "zod";
import {timeRanges} from "../timerange";

export const formSchema = object({
  title: string()
  .min(1, { message: "This field is required" })
  .min(10, { message: "This field is required must have at least 10 characters" }),
  ondate:date({
    required_error: "date is required.",
  }),
  timeRange: boolean().default(false).optional(),
  timeRangeOuput: nativeEnum(timeRanges).optional(),
});
