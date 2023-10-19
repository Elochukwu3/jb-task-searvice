import tw from "tailwind-styled-components";

const Menu = tw.nav`sm:flex justify-between
gap-6 font-satoshi text-xl sm:text-lg items-center
`;

const MenuItem = tw.span`
capitalize font-bold
    block 
    `;
export { Menu, MenuItem };
