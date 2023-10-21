"use client"
import React, { forwardRef, useState, useImperativeHandle } from "react";

const useDropDown =() => {

  const [isDropdownOpen, setDropdownOpen] = useState<Boolean>(false);
  const handleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  }
  const handler = (item:Boolean) => {
    setDropdownOpen(item);
  }
  return { isDropdownOpen, handleDropDown, handler  };
};

useDropDown.displayName = "UseDropDown";
export default useDropDown;



