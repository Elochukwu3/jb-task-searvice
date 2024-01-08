"use client";
import { Metadata } from "next";
import React from "react";
import CreateTitle from "./_title/page";
import useSidebarContext from "@app/(task)/context/FormProvider";

// export const metadata: Metadata = {
//   title: "New task",
//   description: "ask about our product",
// };

const Page = () => {
  const { activeTab } = useSidebarContext();
  let content: JSX.Element;
  if (activeTab === "#Title-date") {
    content = <CreateTitle />;
  } else if (activeTab === "location") {
    content = <div>content location</div>;
  } else if (activeTab === "details") {
    content = <div>content details</div>;
  } else {
    content = <div>content</div>;
  }

  return content;
};

export default Page;
