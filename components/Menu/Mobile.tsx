import { MobileStyle, MobileWrapper, MobileMenuWrapper } from "./MenuStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import { MenuItem } from "./MenuStyle";
import List from "./List";

const Mobile = () => {
  const isTrue = "";
  return (
    <MobileWrapper>
      <MobileStyle>
        <div className="block ml-auto text-3xl w-fit">x</div>
        {isTrue ? (
          <>
            <MenuItem>location</MenuItem>
            <MenuItem>service</MenuItem>
            <MenuItem>sign up/sign in</MenuItem>
            <ButtonWrapper>Become Mender</ButtonWrapper>
          </>
        ) : (
          <List />
        )}
      </MobileStyle>
    </MobileWrapper>
  );
};

export default Mobile;
