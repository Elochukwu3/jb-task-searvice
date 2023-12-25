"use client"
import { useState, SetStateAction } from "react";
type data<T extends SetStateAction<number | null>> ={
    collapse: number | null;
    handler: (id: T) => void;
}
export default function useCollapseAll<T extends SetStateAction<number | null>>():data<T>{
    const [collapse, setCollapse]= useState<number | null>(null)
    const handler = (id: T)=>{
      if(id === collapse){
        return setCollapse(null)
      } 
      setCollapse(id) 
    }
    return{collapse, handler}
}