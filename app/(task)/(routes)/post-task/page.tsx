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
  const { activeTab, activeWindow } = useSidebarContext();
  let content: JSX.Element;
  if (activeTab === activeWindow) {
    content = <CreateTitle />;
  } else if (activeTab === activeWindow) {
    content = <div>content location</div>;
  } else if (activeTab === activeWindow ) {
    content = <div>content details</div>;
  } else {
    content = <div>content</div>;
  }

  return window && content;
};

export default Page;
