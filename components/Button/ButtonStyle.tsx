import tw from "tailwind-styled-components";

type buttonProp = {
  $bool?: Boolean;
};

const ButtonWrapper = tw.button<buttonProp>`
block w-full text-center font-satoshi font-semibold break-inside-avoid whitespace-nowrap
after:content-[""] relative
after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:duration-300 
after:ease-in-out after:z-[-1] after:bg-transparent z-20
after:hover:w-full after:hover:bg-black hover:text-white
${(p) => (p.$bool ? "bg-black text-white" : "bg-white border-2 border-black")}
rounded-md p-2 max-w-xl
`;
export { ButtonWrapper };
