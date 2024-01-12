"use client";
import { Metadata } from "next";
import React from "react";
import CreateTitle from "./_title/page";
import CreateLocation from "./_location/page";
import Details from "./_details/page";
import Budget from "./_budget/page";
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
    content = <CreateLocation/>;
  } else if (param === routes?.Details ) {
    content = <Details />;
  } else if (param === routes?.Budget ) {
    content = <Budget/>;
  } else {
    content = <div>content not available</div>;
  }
} catch (error) {
  content = <div>Error loading content</div>;
}

  return param && content;
};

export default Page;
