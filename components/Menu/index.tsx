import { ButtonWrapper } from "@components/Button/ButtonStyle"
import {Menu as  MenuWrappper, MenuItem} from "./MenuStyle"
import DropDown from "./DropDown";


const Menu = () => {
    
  return (
    <MenuWrappper>
      <MenuItem>Location</MenuItem>
      <MenuItem $bool={true}>services
      <DropDown/>
      </MenuItem>
      <MenuItem>sign up/sign in</MenuItem>
      <ButtonWrapper>Become Mender</ButtonWrapper>
    </MenuWrappper>
  )
}

export default Menu