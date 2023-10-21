"use client"
import { ButtonWrapper } from "@components/Button/ButtonStyle"
import {Menu as  MenuWrappper, MenuItem} from "./MenuStyle"
import DropDown from "./DropDown";
import useDropDown from "@hooks/useDropDown"



const Menu = () => {
const { isDropdownOpen, handleDropDown, handler } = useDropDown()

  return (
    <MenuWrappper>
      <MenuItem>location</MenuItem>
      <MenuItem onClick={handleDropDown} onMouseEnter={()=>handler(true)}  $bool={true}>
         service
      <DropDown isDropdownOpen={isDropdownOpen}/>
      </MenuItem>
      <MenuItem>sign up/sign in</MenuItem>
      <ButtonWrapper>Become Mender</ButtonWrapper>
    </MenuWrappper>
  )
}

export default Menu