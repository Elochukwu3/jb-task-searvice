import tw from "tailwind-styled-components";
import { cn } from "@/lib/utils"

// export type SideBarProp = {
//   $isActive: Boolean;
// };

const AboutLi = tw.li`mb-4 flex items-center justify-between 
`;
const FaqContainer = tw.div`bg-[#ffffff] border-l-2 px-5 py-3 hover:border-[#ffffff] border-black hover:bg-custom-dark hover:text-[#ffffff] transition-colors duration-300 `
const AboutConnector = tw.div`relative z-1 md:w-[8%] flex max-md:flex-col items-start h-fit md:mt-14 md:items-center`
export { AboutLi, AboutConnector, FaqContainer };
