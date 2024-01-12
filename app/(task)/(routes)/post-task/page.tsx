"use client"
import { Metadata } from "next";
import React, { useState, useEffect } from "react";
import CreateTitle from "./_title/page";
import CreateLocation from "./_location/page";
import Details from "./_details/page";
import Budget from "./_budget/page";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { useSearchParams } from 'next/navigation';
import { convertToObject } from "./helper/convertArray";

const metadata: Metadata = {
  title: "New task",
  description: "Ask about our product",
};

const Page = () => {
  const { activeTab } = useSidebarContext();
  const searchParams = useSearchParams();
  const param = searchParams.get('origin');
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const routes = convertToObject();
        if (param === routes?.titleDate) {
          setContent(<CreateTitle />);
        } else if (param === routes?.Location) {
          setContent(<CreateLocation />);
        } else if (param === routes?.Details) {
          setContent(<Details />);
        } else if (param === routes?.Budget) {
          setContent(<Budget />);
        } else {
          setContent(<div>Content not available</div>);
        }
      } catch (error) {
        setContent(<div>Error loading content</div>);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [param]);

  return loading ? <div>Loading...</div> : content;
};

export default Page;
