import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "New task",
  description: "ask about our product",
};
const page = () => {
  return (
    <div className="w-full flex justify-center grow">
    <div className="max-w-[1200px] w-full flex-1 flex flex-col">

    <div className="grid-cols-[1fr_50%_1fr] gap-x-6 px-6 grid grid-cols-[100%] gap-x-4 h-full bg-white px-4">
      WELCOME TO MY PAGE
    </div>
    </div>
    </div>
  );
};

export default page;
