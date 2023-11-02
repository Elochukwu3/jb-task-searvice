import Input from "@components/Input"
import {SearchBoldText, SearchSectionWrapper, HelperButtonWrapper} from "./homeStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import ListHelper from "./ListHelper"

const SearchSection = ({isBool}:{isBool?: Boolean}) => {
  return (
    <SearchSectionWrapper $bool={isBool}>
        <SearchBoldText>Get help. Gain happiness.</SearchBoldText>
        <span className="border-t-2 px-2 my-4 py-4 border-custom-dark block mx-auto w-fit font-bold text-black/30">just task</span>
        <div className="px-3 grid grid-cols-3 space-x-3 max-sm:space-x-0 gap-y-4 max-sm:flex max-sm:flex-col max-sm:justify-center">
        <Input/>
        <ButtonWrapper $bool={true}>Get help today</ButtonWrapper>
        </div>
    <HelperButtonWrapper>
        <ListHelper/>
    </HelperButtonWrapper>
    </SearchSectionWrapper>
  )
}

export default SearchSection