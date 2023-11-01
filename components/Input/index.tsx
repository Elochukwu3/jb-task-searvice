
import {LargerInputWrapper, InputForm} from "./inputStyle";
import { XCircle} from "@phosphor-icons/react";

const Input = () => {
  return (
        <InputForm>
        <LargerInputWrapper placeholder="i need help with..." type={"search"}/>
        <XCircle/>
        </InputForm>
  )
}

export default Input