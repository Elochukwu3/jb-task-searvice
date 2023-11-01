import tw from "tailwind-styled-components"

const LargerInputWrapper = tw.input`w-10/12 outline-none border-none placeholder:text-slate-400 p-2`;
const InputForm = tw.form`border border-slate-300 rounded-md focus:text-base`

export {LargerInputWrapper, InputForm}