import {LargerInputWrapper, InputForm} from "./inputStyle";
import { XCircle, MagnifyingGlass} from "@phosphor-icons/react";

const Input = ({handler, blurhandler}:{handler:() => void, blurhandler: (item:Boolean) => void}) => {
  return (
        <InputForm >
        <MagnifyingGlass size={24}  color={"#d9d9d9"}/>
        <LargerInputWrapper onBlur={()=>blurhandler(false)} onFocus={handler} placeholder="i need help with..." type={"search"} name="search-input"/>
        <XCircle size={24} weight={"fill"} color={"#d9d9d9"}/>
  </InputForm>
  )
}

export default Input