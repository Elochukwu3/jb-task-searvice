import tw from "tailwind-styled-components";
import { ButtonProp } from "@components/Button/ButtonStyle";

const Menu = tw.nav`sm:flex justify-between
gap-4 satoshi text-lg items-center
max-lg:text-sm max-sm:hidden
`;

const MenuItem = tw.span<ButtonProp>`
capitalize font-medium max-lg:font-normal px-2  
    block py- before:content-[""] transition-all before:duration-300 
    before:ease-in-out before:w-0 before:h-1 before:absolute before:right-0 before:left-0  before:bg-black
    ${(p)=>(p.$bool && "group hover:bg-white hover:shadow-md hover:before:w-full relative  border-slate-400")}
    `;
export { Menu, MenuItem };


