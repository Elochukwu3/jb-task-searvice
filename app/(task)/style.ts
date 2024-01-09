import tw from "tailwind-styled-components";
import { cn } from "@/lib/utils"

export type SideBarProp = {
  $isActive: Boolean;
};

const BarButton = tw.div<SideBarProp>`
flex items-center py-2 relative px-4 text-sm w-max font-[500] transition-all  
       ${(p) =>
         p.$isActive &&
         "text-sky-700  hover:bg-custom-greaner/20 "}
`;

export { BarButton };
