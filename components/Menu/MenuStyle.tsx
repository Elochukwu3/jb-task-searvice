import tw from "tailwind-styled-components";
import { ButtonProp } from "@components/Button/ButtonStyle";

const Menu = tw.nav`sm:flex justify-between
gap-4 satoshi text-lg items-center
max-lg:text-sm hidden
`;

const MenuItem = tw.span<ButtonProp>`
capitalize font-medium max-lg:font-normal px-2 cursor-pointer 
  max-sm:flex items-center inline-block py-2 before:content-[""]  before:duration-300  max-sm:text-xl
    before:ease-in-out before:w-0 before:h-1 before:absolute before:right-0 before:left-0  before:bg-black
    ${(p)=>(p.$bool && "group dropdown hover:bg-white hover:shadow-md hover:before:w-full relative  border-slate-400")}
    `;

    const DeskTopDropDownWrapper = tw.div`absolute before:content-[''] top-10 before:w-[73%] before:border-t 
    before:block before:border-slate-300 z-50 h-auto hidden  hover:block group-hover:inline-block 
     right-0  border-x border-b border-slate-300 shadow-md bg-white pb-4"
    `
    const UlWrapper = tw.div`w-full space-y-3 px-14 pb-3 text-custom-greaner`;

    const MobileStyle = tw.div`block overflow-y-auto relative space-y-5 text-xl font-semibold pb-5  bg-white h-auto w-full text-custom-greaner`;
    const MobileWrapper = tw.div`bg-black z-50 block inset-0 sm:hidden  bg-opacity-10 backdrop-blur-sm fixed left-0`;

export { Menu, MenuItem,  DeskTopDropDownWrapper, UlWrapper, MobileStyle, MobileWrapper };


