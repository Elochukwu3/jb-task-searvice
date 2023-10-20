import React, { useState } from "react";
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
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {isDropdownOpen && (
        <ul
          className='hidden absolute before:border-t font-satoshi font-semibold before:border-b shadow-md space-y-4 text-base capitalize beforeborder-slate-400 before:content-[""] before:block before:w-[69%] before:h- origin-bottom-left 
    bg-red-70 w-80 right-[0.5%] top-[90%] border-x border-b bg-white  border-slate-400'
        >
          <div className="w-8/12 mx-auto block opacity-70 text-zinc-500  pt-4">
            {" "}
            Popular Tasks
          </div>
          {list.map((item) => (
            <div
              key={item}
              className="w-8/12 mx-auto block text-custom-greaner"
            >
              {item}
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDown;


// const dropdownRef = useRef(null);

//   const handleDocumentClick = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleDocumentClick);
//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, []);


