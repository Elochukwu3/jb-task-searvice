import tw from "tailwind-styled-components";
import { ButtonProp } from "@components/Button/ButtonStyle";

const Menu = tw.nav`sm:flex justify-between
gap-4 satoshi text-lg items-center
max-lg:text-sm hidden
`;

const MenuItem = tw.span<ButtonProp>`
capitalize font-medium max-lg:font-normal px-2 cursor-pointer 
    inline-block py-2 before:content-[""]  before:duration-300 max-sm:block max-sm:text-xl
    before:ease-in-out before:w-0 before:h-1 before:absolute before:right-0 before:left-0  before:bg-black
    ${(p)=>(p.$bool && "group dropdown hover:bg-white hover:shadow-md hover:before:w-full relative  border-slate-400")}
    `;

    const DeskTopDropDownWrapper = tw.div`absolute before:content-[''] top-10 before:w-[73%] before:border-t 
    before:block before:border-slate-300 z-50 h-auto hidden  hover:block group-hover:inline-block 
     right-0  border-x border-b border-slate-300 shadow-md bg-white pb-4"
    `
    const UlWrapper = tw.div`w-full space-y-3 px-14  text-custom-greaner`;

    const MobileStyle = tw.div`block overflow-scroll relative space-y-6 text-xl font-semibold pb-5 px-12 bg-white h-full w-80 text-custom-greaner`;
    const MobileWrapper = tw.div`bg-[#7b7f82e6] z-50 block inset-0 sm:hidden fixed left-0`;
    const MobileMenuWrapper =tw.div`absolute top-0 z-50 space-y-6 w-full tex overflow-scroll bg-white h-full`

export { Menu, MenuItem,  DeskTopDropDownWrapper, UlWrapper, MobileStyle, MobileWrapper, MobileMenuWrapper   };


