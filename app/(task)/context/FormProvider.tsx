"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ReactProp } from "@app-types/type";
import { useRouter } from 'next/navigation';

type SidebarContextType = {
  activeTab: string;
  handleSetter: (value: string) => void;
  activeWindow: string;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const FormProvider: React.FC = ({ children }:ReactProp ) => {
  const [activeTab, setActiveTab] = useState<string>("#title-date");
  const [activeWindow, setActiveWindow] = useState<string>(window.location.hash);
  const router = useRouter()
const handleSetter = (value:string)=>{
    setActiveTab(value)
    if(value){
      router.push(value, { scroll: false });
    }
}

useEffect(() => {
  const handlePopState = () => {
    const url = window.location.hash;
    setActiveWindow(url)
    setActiveTab(url);
  };
  window.addEventListener('popstate', handlePopState);
  return () => {
    window.removeEventListener('popstate', handlePopState);
  };

}, [activeTab, router]);
  return (
    <SidebarContext.Provider value={{activeWindow, activeTab, handleSetter }}>
      {children}
    </SidebarContext.Provider>
  );
};

 const useSidebarContext = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};

export default useSidebarContext;