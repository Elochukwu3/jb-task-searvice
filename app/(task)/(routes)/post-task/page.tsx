import TaskSideBar from "@app/(task)/_components/TaskSideBar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "New task",
  description: "ask about our product",
};
const page = () => {
  return (
    <div className="flex justify-center w-full grow">
    <div className="max-w-[1200px] w-full flex-1 flex flex-col">

    <div className="md:grid-cols-[1fr_50%_1fr] gap-x-6 px-6 grid grid-cols-[100%] h-full bg-white">
      <TaskSideBar/>
      <div className="bg-green-900 h-full"></div>
      <div className="bg-green-200"></div>
    </div>
    </div>
    </div>
  );
};

export default page;
