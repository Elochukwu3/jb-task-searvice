"use client";
import Image from "next/image";
import { ProductCardWrapper } from "./cardStyles";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import CardOverlay from "./CardOverlay";
import useDropDown from "@hooks/useDropDown";
import { motion, AnimatePresence } from "framer-motion";
// import {Triangle} from "@phosphor-icons/react/dist/ssr";
const btnVariant = {
  close: {
    y: -10,
  },
  open: {
    y: [0, -5, 0,-5, 0],
    transition: {
      duration: 0.9,
      delay: 0,
      type: "tween",
    },
  },
};

const ProductCard = () => {
  const { isDropdownOpen: swipe, handleDropDown } = useDropDown();
  return (
    <ProductCardWrapper>
      <Image src="/images/banner-1.jpg" alt="card" width={500} height={300} />
      <AnimatePresence initial={false}>
      {swipe && (
        <motion.div variants={btnVariant} initial="close" animate="open" onClick={handleDropDown} className="absolute top-0 left-0 right-0 z-30">
          <ButtonWrapper $bool={swipe}>See Less</ButtonWrapper>
        </motion.div>
      )}
      </AnimatePresence>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Mount a TV, art or shelves
          </h5>
        </a>
        <p className="my-2">
          Say goodbye to fuzzy screens and pixelated problems
        </p>
        {!swipe && (
          <ButtonWrapper className="after:hover:w-0 hover:text-custom-greaner" onClick={handleDropDown}>see more</ButtonWrapper>
        )}
        <CardOverlay swipe={swipe} />
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
