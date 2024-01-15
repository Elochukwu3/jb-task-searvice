"use client"
import React, { useState, useEffect } from "react";
import CreateTitle from "./_title/page";
import CreateLocation from "./_location/page";
import Details from "./_details/page";
import Budget from "./_budget/page";
import { useSearchParams } from 'next/navigation';
import { convertToObject } from "./helper/convertArray";
import { useRouter } from "next/navigation";


const Page = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get('origin');
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<JSX.Element | null>(null);
  const router = useRouter();
  const routes = convertToObject();

  useEffect(() => {
    const loadContent = async () => {
      try {
        if (!param) {
          router.replace(`/post-task?origin=${routes?.titleDate}`);
          setContent(<CreateTitle />);
        }
        
        if (param === routes?.titleDate) {
          setContent(<CreateTitle />);
        } else if (param === routes?.Location) {
          setContent(<CreateLocation />);
        } else if (param === routes?.Details) {
          setContent(<Details />);
        } else if (param === routes?.Budget) {
          setContent(<Budget />);
        } else {
          setContent(<div/>);;
        }
      } catch (error) {
        setContent(<div>Error loading content</div>);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [param, router, routes?.Budget, routes?.Details, routes?.Location,  routes?.titleDate]);

  return loading ? <div>Loading...</div> : <div className="md:px-6 px-1">{content}</div>;
};

export default Page;
