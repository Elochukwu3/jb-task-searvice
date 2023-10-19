import tw from "tailwind-styled-components";

const Menu = tw.nav`sm:flex justify-between
gap-6 font-satoshi text-xl sm:tex items-center
max-lg:text-sm max-sm:hidden
`;

const MenuItem = tw.span`
capitalize font-bold max-lg:font-normal
    block 
    `;
export { Menu, MenuItem };
