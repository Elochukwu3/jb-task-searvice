
import { Metadata } from "next";
import React from "react";
import CreateTitle from "./_title/page";

export const metadata: Metadata = {
  title: "New task",
  description: "ask about our product",
};
const page = () => {
  return (
      <div  className="">
        <CreateTitle/>
      </div>
  );
};

export default page;
