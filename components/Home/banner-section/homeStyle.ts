import tw from "tailwind-styled-components";
import {ButtonProp} from "@components/Button/ButtonStyle"
const BannerWrapper = tw.div`w-full
h-[495px] flex  justify-center items-center relative
bg-[#f6f5f1] max-sm:h-auto max-sm:flex-col
`;
//Home page search section setyling
const SearchBoldText = tw.span`max-sm:text-xl block text-custom-dark text-4xl text-center 
font-bold whitespace-nowrap max-md:text-3xl `;
const SearchSectionWrapper = tw.div<ButtonProp>`mx-auto  ${(p)=> (p.$bool ? "max-sm:hidden" : "sm:hidden block")} py-3 bg-white 
z-50 p-4 rounded-md max-md:w-11/12 w-7/12  max-sm:w-full`;
const HelperButton = tw.span `block w-fit m-2 text-center font-satoshi font-semibold break-inside-avoid 
elative text-custom-greaner text-sm border border-custom-greaner rounded-md py-1 px-2`;
const HelperButtonWrapper = tw.div`flex flex-wrap max-sm:w-11/12 max-sm:justify-center my-3 max-sm:mx-auto`;
const SearchDropperwrapper = tw.div `absolute w-full p-3 bg-white left-0 right-0 border space-y-4 border-slate-300`;
const SearchInputWrapper = tw.div`px-3 grid grid-cols-3 space-x-3 max-sm:space-x-0 gap-y-4 max-sm:flex max-sm:flex-col max-sm:justify-center`
export {SearchInputWrapper, HelperButton, HelperButtonWrapper, BannerWrapper, SearchBoldText, SearchSectionWrapper, SearchDropperwrapper };
