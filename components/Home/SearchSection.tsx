import Input from "@components/Input"
import {SearchBoldText, SearchSectionWrapper} from "./homeStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle"

const SearchSection = () => {
  return (
    <SearchSectionWrapper>
        <SearchBoldText>Get help. Gain happiness.</SearchBoldText>
        <span className="border-t-2 px-2 my-4 py-4 border-custom-dark block mx-auto w-fit">just task</span>
        <div className="grid grid-cols-3 space-x-3 max-sm:space-x-0 gap-y-4 max-sm:flex max-sm:flex-col max-sm:justify-center">
        <Input/>
        <ButtonWrapper>Get help today</ButtonWrapper>
        </div>
    </SearchSectionWrapper>
  )
}

export default SearchSection