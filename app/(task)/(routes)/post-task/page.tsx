"use client";
import { Metadata } from "next";
import React from "react";
import CreateTitle from "./_title/page";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { useSearchParams } from 'next/navigation';
import { formQeuryRoutes } from "@app/(task)/_components/form-routes";
import { Rotate3D } from "lucide-react";



// export const metadata: Metadata = {
//   title: "New task",
//   description: "ask about our product",
// };

const Page = () => {
  const { activeTab, activeWindow } = useSidebarContext();
  const searchParams = useSearchParams();
  const param = searchParams.get('origin');

  const routeObj:{[key:string]: string} = {};
  {formQeuryRoutes.forEach(({href})=>{
    const key = href.split("#")[1];
    routeObj[key] = href
  })}

  let content: JSX.Element;
  if (param === routeObj?.titleDate) {
    content = <CreateTitle />;
  } else if (activeTab === activeWindow) {
    content = <div>content location</div>;
  } else if (activeTab === activeWindow ) {
    content = <div>content details</div>;
  } else {
    content = <div>content not available</div>;
  }

  return param && content;
};

export default Page;
