import React from "react";

const DropDown = () => {
  const list = [
    "Furniture Assembly",
    "TV Mounting",
    "Help Moving",
    "Handyman",
    "Yard Work",
    "Painting",
    "Mounting Services",
    "Electrical Help",
    " Plumbing",
    "Hang Pictures",
    "Lighting Installation",
  ];
  return (
    <ul
      className='absolute before:border-t font-satoshi font-semibold before:border-b shadow-md space-y-5 text-xl capitalize beforeborder-slate-400 before:content-[""] before:block before:w-[69%] before:h- origin-bottom-left 
    bg-red-70 w-80 right-[0.5%] top-[90%] border-x border-b  border-slate-400'
    >
        <div  className="w-8/12 mx-auto block opacity-80 ">  Popular Tasks</div>
      {list.map((item) => (
        <div key={item} className="w-8/12 mx-auto block text-[#022022]">{item}</div>
      ))}
    </ul>
  );
};

export default DropDown;
