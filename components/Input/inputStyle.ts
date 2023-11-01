import tw from "tailwind-styled-components"

const LargerInputWrapper = tw.input`w-11/12 text-black/70 font-bold text-lg outline-none border-none placeholder:text-slate-400 p-2`;
const InputForm = tw.form`w-full px-2 col-span-2 border bg-white border-slate-300 flex items-center rounded-md focus:text-base`

export {LargerInputWrapper, InputForm}