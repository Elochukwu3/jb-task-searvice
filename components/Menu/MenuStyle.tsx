import tw from "tailwind-styled-components";
import { ButtonProp } from "@/components/Button/ButtonStyle";

const Menu = tw.nav`sm:flex justify-between
gap-4 satoshi text-lg items-center
max-lg:text-sm hidden
`;

const MenuItem = tw.span<ButtonProp>`
capitalize max-md:font-bold font-montserrat max-lg:font-normal px-2 cursor-pointer rounded-md md:hover:bg-dark md:hover:text-white
  max-sm:flex items-center inline-block py-2 before:content-[""]  before:duration-300  max-sm:text-xl
    before:ease-in-out before:w-0 before:h-2 before:absolute before:-top-0 before:right-0 before:left-0  before:bg-white
    ${(p)=>(p.$bool && "group dropdown  hover:shadow-md hover:before:w-full relative  border-slate-400")}
    `;

    const DeskTopDropDownWrapper = tw.div`absolute before:content-[''] top-10 before:w-[73%] before:border-t 
    before:block before:border-slate-300 z-50 h-auto hidden  hover:block group-hover:inline-block 
     right-0  border-x border-b border-slate-300 shadow-md bg-white pb-4"
    `
    const UlWrapper = tw.div`w-full space-y-3 mt-5 px-14 pb-3 text-custom-greaner font-montserrat`;

    const MobileStyle = tw.div`uppercase block w-10/12   mx-auto overflow-y-auto relative space-y-5 text-xl font-semibold pb-5  bg-white h-auto font-clash text-custom-greaner`;
    const MobileWrapper = tw.div`bg-black z-50 block font-montserrat inset-0 sm:hidden  bg-opacity-10 backdrop-blur-sm fixed left-0`;

export { Menu, MenuItem,  DeskTopDropDownWrapper, UlWrapper, MobileStyle, MobileWrapper };


