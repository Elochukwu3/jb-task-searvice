import Image from "next/image";
import { ProductCardWrapper } from "./cardStyles";
import Testimonial from "./Testimonial";
import CardOverlay from "./CardOverlay";
// import {Triangle} from "@phosphor-icons/react/dist/ssr";

const ProductCard = () => {
  return (
    <ProductCardWrapper>
        <Image src="/images/banner-1.jpg" alt="card" width={500} height={300} />

      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Mount a TV, art or shelves
          </h5>
        </a>
        <p>Say goodbye to fuzzy screens and pixelated problems</p>
      </div>
      <CardOverlay />
    </ProductCardWrapper>
  );
};

export default ProductCard;
