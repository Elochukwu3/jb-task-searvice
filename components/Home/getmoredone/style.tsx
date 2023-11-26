import tw from "tailwind-styled-components";

export const GetMoreWrapper = tw.section`
mx-auto block w-11/12 max-md:w-full bg-custom-dark/90 rounded-md`
export const GetMoreInner = tw.div`
max-w-[1440px]  flex justify-between gap-8 flex-grow items-start 
max-md:items-center flex-col md:flex-row lg:flex-row-reverse h-fit py-7 md:px-9 lg:px-20 px-2`
export const PTag = tw.p`block max-sm:text-center text-lg max-sm:text-sm
 text-white my-4 font-bold `
 export const Imagewrap = tw.div`relative rounded-lg overflow-hidden h-[95%] w-10/12 max-md:aspect-square`
 export const ImageCont = tw.div` md:h-64 lg:h-96 h-44 rounded-lg relative w-96 max-sm:w-10/12`