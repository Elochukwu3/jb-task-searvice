import tw from "tailwind-styled-components";

export type ButtonProp = {
  $bool?: Boolean;
};

const ButtonWrapper = tw.button<ButtonProp>`
block w-full text-center font-satoshi font-semibold break-inside-avoid whitespace-nowrap
after:content-[""] relative text-custom-greaner text-sm
after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:duration-300 
after:ease-in-out after:z-[-1] after:bg-transparent z-20
after:hover:w-full after:hover:bg-custom-greaner outline-none hover:text-white
${(p) => (p.$bool ? "bg-custom-greaner text-white" : "bg-white border-2 border-custom-greaner")}
rounded-md p-2 max-w-xl  
`;
export { ButtonWrapper };
