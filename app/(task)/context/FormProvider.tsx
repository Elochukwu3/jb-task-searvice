"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type SidebarContextType = {
  activeTab: {[key:string]: boolean};
  handleSetter: (value: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const FormProvider: React.FC<{children: React.ReactNode}>= ({ children } ) => {
  const [activeTab, setActiveTab] = useState<{[key:string]: boolean}>({});
  const router = useRouter()
const handleSetter = (value:string)=>{
  if(value){
    router.push(`/post-task?origin=${value}`, {scroll: false});
    setActiveTab((prev)=> ({...prev, [value]: true}))
    }
} 


  return (
    <SidebarContext.Provider value={{activeTab, handleSetter }}>
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