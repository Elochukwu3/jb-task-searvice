"use client";
import { useState, useEffect, useCallback } from "react";

const useTimeOut = (
  initialValue: number = 0,
  dataArray: Array<{}>,
  intervalTime: number
): number => {
  const [slider, setSlider] = useState<number>(initialValue);

  const changeSlider = useCallback(() => {
    const interval = setTimeout(() => {
      setSlider((prev) => (prev < dataArray.length - 1 ? prev + 1 : 0));
    }, intervalTime);

    return interval;
  }, [dataArray, intervalTime]);

  useEffect(() => {
    const interval = changeSlider();

    return () => clearTimeout(interval);
  }, [slider, dataArray, intervalTime, changeSlider]);

  return slider;
};

export default useTimeOut;
