"use client";
import { Metadata } from "next";
import React from "react";
import CreateTitle from "./_title/page";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { useSearchParams } from 'next/navigation';
import {convertToObject} from "./helper/convertArray"



 const metadata: Metadata = {
  title: "New task",
  description: "ask about our product",
};

const Page = () => {
  const { activeTab} = useSidebarContext();
  const searchParams = useSearchParams();
  const param = searchParams.get('origin');

  let content: JSX.Element;
try {
  const routes = convertToObject();
  if (param === routes?.titleDate) {
    content = <CreateTitle />;
  } else if (param === routes?.Location) {
    content = <div>content location</div>;
  } else if (param === routes?.Details ) {
    content = <div>content details</div>;
  } else if (param === routes?.Budget ) {
    content = <div>content Budget</div>;
  } else {
    content = <div>content not available</div>;
  }
} catch (error) {
  content = <div>Error loading content</div>;
}

  return param && content;
};

export default Page;
