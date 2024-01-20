import tw from "tailwind-styled-components";
import { cn } from "@/lib/utils"

// export type SideBarProp = {
//   $isActive: Boolean;
// };

const AboutLi = tw.li`mb-4 flex items-center justify-between 
`;

const AboutConnector = tw.div`relative z-1 md:w-[8%] flex max-md:flex-col items-start h-fit md:mt-14 md:items-center`
export { AboutLi, AboutConnector };
