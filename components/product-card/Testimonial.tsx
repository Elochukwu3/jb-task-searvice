import useDropDown from "@hooks/useDropDown";
 import {motion } from "framer-motion";


const Testimonial = () => {
  const vairant={
      
  }
  return (
      <details className="text-sm my-5 px-5 ">
        <summary className="inline-flex justify-between">
          A Click, A Fix, A Wow – Thank You, JPPromend!<span className="after:content-['+']"></span>
        </summary>
        <div className="">
        <div className="bg-custom-greaner p-4 origin-center ease-[cubic-bezier(0.83, 0, 0.17, 1)]">
          Can I work on a project I started before the hackathon? Can I work on
          a project I started before the hackathon
        </div>
        </div>
      </details>
  );
};
export default Testimonial