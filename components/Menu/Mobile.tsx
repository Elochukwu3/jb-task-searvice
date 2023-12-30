"use client";
import { MobileStyle, MobileWrapper } from "./MenuStyle";
import useDropDown from "@hooks/useDropDown";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarVariant } from "./variants";
import { MenuItem } from "./MenuStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import List from "./List";
import { XCircle, CaretLeft, CaretRight } from "@phosphor-icons/react";

const Mobile = ({ handler }: { handler: (item: Boolean) => void }) => {
  const { isDropdownOpen, handleDropDown } = useDropDown();

  return (
    <MobileWrapper>
      <motion.div
        variants={sidebarVariant}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
        className=" bg-white h-full w-full"
      >
        <span className="flex justify-between text-xl py-3 px-3 opacity-70 items-center">
          {isDropdownOpen && (
            <span
              onClick={handleDropDown}
              className="gap-2 text-xl font-bold items-center text-custom-greaner flex "
            >
              <CaretLeft size={24} color={"#0d7a5f"} weight={"light"} />
              Services
            </span>
          )}
          <span
            className="block ml-auto cursor-pointer py-3"
            onClick={() => handler(false)}
          >
            <XCircle size={32} color={"#0d7a5f"} />
          </span>
        </span>
        <AnimatePresence mode="wait">
          {!isDropdownOpen ? (
            <MobileStyle>
              <MenuItem>location</MenuItem>
              <MenuItem onClick={handleDropDown}>
                <span>services</span>
                <CaretRight
                  size={24}
                  color={"#0d7a5f"}
                  weight={"light"}
                  className="ml-auto"
                />
              </MenuItem>
              <MenuItem>sign up/sign in</MenuItem>
              <ButtonWrapper className="font-montserrat mt-5 hover:text-custom-greaner after:hover:w-0 after:hover:bg-white">Become Mender</ButtonWrapper>
            </MobileStyle>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              exit={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="h-full w-10/12 pl-5  mx-auto text-custom-greaner space-y-5"
            >
              <List />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MobileWrapper>
  );
};

export default Mobile;
