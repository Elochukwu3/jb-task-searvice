import tw from "tailwind-styled-components";
import { cn } from "@/lib/utils"

export type SideBarProp = {
  $isActive: Boolean;
};

const BarButton = tw.div<SideBarProp>`
flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 
       ${(p) =>
         p.$isActive &&
         "text-sky-700 bg-black/20 hover:bg-sky-200/20 hover:text-sky-700"}
`;

export { BarButton };
