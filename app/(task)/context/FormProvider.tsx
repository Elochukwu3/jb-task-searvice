"use client"
import React, { createContext, useState, useContext } from 'react';
import { ReactProp } from "@app-types/type";

type SidebarContextType = {
  activeTab: string;
  handleSetter: (value: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const FormProvider: React.FC = ({ children }:ReactProp ) => {
  const [activeTab, setActiveTab] = useState<string>("#Title-date");
const handleSetter = (value:string)=>{
    setActiveTab(value)
}
  return (
    <SidebarContext.Provider value={{ activeTab, handleSetter }}>
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