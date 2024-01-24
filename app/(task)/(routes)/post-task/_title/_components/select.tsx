import React from "react";
import {  Controller } from "react-hook-form";
import {timeRanges} from "./timerange";
import {FormType} from "./type"

export default function SelectForm({form}: FormType) {
    
  return (
    <>
      <label>Time Range:</label>
      <Controller
        control={form.control}
        name="timeRangeOuput"
        render={({ field }) => (
          <select
            {...field}
            defaultValue="Select a time range"
              className=" bg-white border border-gray-300 cursor-pointer focus:border-custom-greaner/40 focus:outline-none hover:bg-gray-100 hover:border-custom-greaner/50 p-2.5 placeholder-gray-400 rounded-lg text-gray-600 w-64"
          >
            {Object.values(timeRanges).map((range, index) => (
              <option key={`${index}timerange`} value={range}>
                {range}
              </option>
            ))}
          </select>
        )}
      />

    </>
  );
}
