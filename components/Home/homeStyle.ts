import tw from "tailwind-styled-components";
const BannerWrapper = tw.div`
bg-no-repeat bg-cover bg-center w-full
h-[495px] flex justify-center items-center
bg-[#f6f5f1] aspect-square overflow-hidden
`;

const SearchBoldText = tw.span`max-sm:text-l block text-custom-dark text-4xl text-center 
font-bold whitespace-nowrap max-md:text-3xl `;
const SearchSectionWrapper = tw.div`bg-white p-4 rounded-md max-md:w-11/12 w-7/12 max-sm:w-full`;
export { BannerWrapper, SearchBoldText, SearchSectionWrapper };
