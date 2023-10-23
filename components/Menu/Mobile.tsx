import { MobileStyle, MobileWrapper, MobileMenuWrapper } from "./MenuStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import { MenuItem } from "./MenuStyle";
import List from "./List";

const Mobile = () => {
  const isTrue = "";
  return (
    <MobileWrapper>
       <div className=" bg-white h-full w-80 px-12">
       <div className="block ml-auto w-fit text-xl pt-1">x</div>
      <MobileStyle>
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
       </div>
    </MobileWrapper>
  );
};

export default Mobile;
