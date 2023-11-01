// import Input from "@components/Input"
import {SearchBoldText, SearchSectionWrapper} from "./homeStyle";

const SearchSection = () => {
  return (
    <SearchSectionWrapper>
        <SearchBoldText>Get help. Gain happiness.</SearchBoldText>
        <span className="border-t-2 px-2 my-4 py-4 border-custom-dark block mx-auto w-fit">just task</span>
        {/* <Input/> */}
    </SearchSectionWrapper>
  )
}

export default SearchSection