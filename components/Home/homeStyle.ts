import tw from "tailwind-styled-components";
import {ButtonProp} from "@components/Button/ButtonStyle"
const BannerWrapper = tw.div`
bg-no-repeat bg-cover bg-center w-full
h-[495px] flex justify-center items-center
bg-[#f6f5f1] aspect-square overflow-hidden
`;
//Home page search section setyling
const SearchBoldText = tw.span`max-sm:text-l block text-custom-dark text-4xl text-center 
font-bold whitespace-nowrap max-md:text-3xl `;
const SearchSectionWrapper = tw.div<ButtonProp>`${(p)=> (p.$bool ? "max-sm:hidden" : "sm:hidden block")} py-3 bg-white z-50 p-4 rounded-md max-md:w-11/12 w-7/12  max-sm:w-full`;
const HelperButton = tw.span `block w-fit m-2 text-center font-satoshi font-semibold break-inside-avoid 
elative text-custom-greaner text-sm border border-custom-greaner rounded-md py-1 px-2`;
const HelperButtonWrapper = tw.div`flex flex-wrap max-sm:w-11/12 max-sm:justify-center my-3 max-sm:mx-auto`;
const SearchDropperwrapper = tw.div `absolute w-full p-3 bg-white left-0 right-0 border space-y-4 border-slate-300`;

export { HelperButton, HelperButtonWrapper, BannerWrapper, SearchBoldText, SearchSectionWrapper, SearchDropperwrapper };
