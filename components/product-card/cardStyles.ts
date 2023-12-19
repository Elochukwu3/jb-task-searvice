import tw from "tailwind-styled-components";
import { ButtonProp } from "@components/Button/ButtonStyle";


export const ProductCardWrapper = tw.div` 
 w-[213.3px] mx-auto relative bg-white border border-zinc-300
overflow-hidden  h-fit shadow max-sm:shadow-md shadow-white 
dark:bg-transparent  


`;
export const CardOverLayWrap = tw.div<ButtonProp>`
bg-white absolute z-20 inset-x-0 bottom-0 top-0 py-5 duration-300 max-sm:rounded-lg
overflow-y-auto overflow-x-hidden no-scrollbar origin-bottom ease-[cubic-bezier(0.83, 0, 0.17, 1)]
${(p)=> (p.$bool ? "scale-y-95   opacity-100" : "scale-y-0 opacity-0")} transition-all
`
export const CardParallaxWrapper = tw.div`
sticky flex h-screen items-start justify-center top-5
` 