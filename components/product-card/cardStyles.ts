import tw from "tailwind-styled-components";
import { ButtonProp } from "@components/Button/ButtonStyle";


export const ProductCardWrapper = tw.div` 
max-w-sm xl:w-9/12 md:w-11/12 mx-auto relative bg-white border border-gray-200 
overflow-hidden rounded-lg shadow h-auto dark:bg-gray-800 dark:border-gray-700`;
export const CardOverLayWrap = tw.div<ButtonProp>`
bg-white absolute z-20 inset-x-0 bottom-0 top-0 duration-100 
overflow-y-auto no-scrollbar origin-bottom
${(p)=> (p.$bool ? "scale-y-90 " : "scale-y-0")}
`