"use client"
import {LargerInputWrapper, InputForm} from "./inputStyle";
import { XCircle, MagnifyingGlass} from "@phosphor-icons/react";

const Input = () => {
  return (
        <InputForm>
        <MagnifyingGlass size={24}  color={"#d9d9d9"}/>
        <LargerInputWrapper placeholder="i need help with..." type={"search"}/>
        <XCircle size={24} weight="fill" color={"#d9d9d9"}/>
  </InputForm>
  )
}

export default Input