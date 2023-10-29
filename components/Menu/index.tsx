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
      <MenuItem $bool={true}>
         service
      <DropDown/>
      </MenuItem>
      <MenuItem>sign up/sign in</MenuItem>
      <ButtonWrapper>Become Mender</ButtonWrapper>
    </MenuWrappper>
  )
}

export default Menu