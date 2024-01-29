import tw from "tailwind-styled-components";
import { cn } from "@/lib/utils"

// export type SideBarProp = {
//   $isActive: Boolean;
// };

const AboutLi = tw.li`mb-4 flex items-center justify-between 
`;
const FaqContainer = tw.div`bg-[#ffffff] border-l-2 px-5 py-3 hover:border-[#ffffff] border-black hover:bg-custom-dark hover:text-[#ffffff] transition-colors duration-300 `
const AboutConnector = tw.div`relative z-1 md:w-[8%] flex max-md:flex-col items-start h-fit md:mt-14 md:items-center`
const AboutHero = tw.div`overflow-hidden max-sm:w-full relative min-h-[60vh] md:w-11/12 w-[96%] flex-col rounded-xl mx-auto max-md:gap-5 md:flex-row flex justify-between px-5 max-md:pt-20  md:py-20 bg-[#F9F3EF] max-md:pb-5'`

export { AboutLi, AboutConnector, FaqContainer,  AboutHero };
