"use client"
import Input from "@/components/Input";
import {
  SearchBoldText,
  SearchSectionWrapper,
  HelperButtonWrapper,
  SearchInputWrapper
} from "./homeStyle";
import { ButtonWrapper } from "@/components/Button/ButtonStyle";
import ListHelper from "./ListHelper";
import SearchDropper from "./SearchDropper";
import useDropDown from "@/hooks/useDropDown";

const SearchSection = ({ isBool }: { isBool?: Boolean }) => {
  const { isDropdownOpen, handleDropDown, handler } = useDropDown();
 

  return (
    <SearchSectionWrapper $bool={isBool}>
      <SearchBoldText>Get help. Gain happiness.</SearchBoldText>
      <span className="border-t-2 px-2 my-4 py-4 border-custom-dark block mx-auto w-fit font-bold text-black/30">
        just task
      </span>
      <SearchInputWrapper>
        <div className="w-full col-span-2 relative">
          <Input handler={handleDropDown} blurhandler={handler}/>
          {
          isDropdownOpen && <SearchDropper blurhandler={handler}/>

          }
          </div>
        <ButtonWrapper $bool={true}>Get help today</ButtonWrapper>
      </SearchInputWrapper>
      <HelperButtonWrapper>
        <ListHelper />
      </HelperButtonWrapper>
    </SearchSectionWrapper>
  );
};

export default SearchSection;
