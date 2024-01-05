import tw from "tailwind-styled-components";
import { cn } from "@/lib/utils"

export type SideBarProp = {
  $isActive: Boolean;
};

const BarButton = tw.div<SideBarProp>`
flex items-center py-2  text-sm font-[500] pl-6 transition-all  
       ${(p) =>
         p.$isActive &&
         "text-sky-700  hover:bg-red-900 "}
`;

export { BarButton };
