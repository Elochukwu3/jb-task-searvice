import tw from "tailwind-styled-components";


const NavWrapper = tw.div `
flex justify-between whitespace-nowrap items-center
bg-white border-b border-zinc-200 break-inside-avoid w-auto
gap-8 text-xs fixed inset-x-0 top-0 z-40
p-6 max-lg:px-3 
max-sm:grid max-sm:grid-cols-3 max-sm:pl-2
`
export {NavWrapper}