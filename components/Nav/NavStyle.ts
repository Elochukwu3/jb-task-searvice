import tw from "tailwind-styled-components";


const NavWrapper = tw.div `
flex justify-between whitespace-nowrap items-center
bg-white shadow-md shadow-green-50 break-inside-avoid w-auto
gap-8 text-xs
p-6 max-lg:px-3 
max-sm:grid max-sm:grid-cols-3 max-sm:pl-2
`
export {NavWrapper}