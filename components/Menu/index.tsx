import { ButtonWrapper } from "@components/Button/ButtonStyle"
import {Menu as  MenuWrappper, MenuItem} from "./MenuStyle"


const Menu = () => {
    
  return (
    <MenuWrappper>
      <MenuItem>Location</MenuItem>
      <MenuItem>services</MenuItem>
      <MenuItem>sign up/sign in</MenuItem>
      <ButtonWrapper>Become Mender</ButtonWrapper>
    </MenuWrappper>
  )
}

export default Menu