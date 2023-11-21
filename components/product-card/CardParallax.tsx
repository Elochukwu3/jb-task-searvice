"use client"
import { CardParallaxWrapper } from "./cardStyles";

const CardParallax = ({index, color}:{index:number, color: string}) => {
  return (
    <CardParallaxWrapper >
      <div style={{background: color, top:`calc(-5vh + ${index * 25}px)`}} className="origin-top w-screen -top-1/4 h-[500px] relative text-black text-3xl text-center bg-white">hello</div>
    </CardParallaxWrapper>
  );
};
export default CardParallax;
