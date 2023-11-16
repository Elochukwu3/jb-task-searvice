import Image from "next/image";
import { ProductCardWrapper } from "./cardStyles";
import Testimonial from "./Testimonial";
// import {Triangle} from "@phosphor-icons/react/dist/ssr";

const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <a href="#">
        <Image src="/images/banner-1.jpg" alt="card" width={500} height={300} />
      </a>

      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Mount a TV, art or shelves
          </h5>
        </a>
        <p>Say goodbye to fuzzy screens and pixelated problems</p>
      </div>
      <div className="bg-white absolute z-20 inset-x-0 bottom-0 top-5 overflow-y-auto no-scrollbar">
        <h5 className="my-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mount a TV, art or shelves
        </h5>
        <div className="overflow-x-scroll no-scrollbar flex gap-5 w-10/12 ml-auto bg-white">
          <div className="h-40 relative w-28 rounded-md overflow-hidden shrink-0">
            <Image src="/images/banner-1.jpg" alt="card" fill />
          </div>
          <div className="h-40 relative w-28 rounded-md overflow-hidden shrink-0">
            <Image
              src="/images/banner-1.jpg"
              alt="card"
              fill
              // objectFit={"cover"}
            />
          </div>
          <div className="h-40 relative w-28 rounded-md overflow-hidden shrink-0">
            <Image
              src="/images/banner-1.jpg"
              alt="card"
              fill
              // objectFit={"cover"}
            />
          </div>
        </div>
        <p className="text-sm p-5 text-white bg-green-50/50">
          Transform your TV troubles into triumphs with Television Mender! 🛠️
          Say goodbye to fuzzy screens and pixelated problems. Our expert team
          is here to rescue your favorite shows and movies. Fast, reliable, and
          hassle-free TV repair, right at your fingertips. Click, mend, and get
          back to binge-watching bliss! 📺✨ Visit our website now for a
          crystal-clear viewing experience! #TelevisionMender #FixItInAMinute
        </p>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        {/* <div className="laptop-container">
      <div className="screen">
        <div className="content">
          <p> is here to rescue your favorite shows and movies. Fast, reliable, and
          hassle-free TV repair, right at your fingertips. Click, mend, and get
          back to binge-watching bliss! 📺✨ Visit our website now for a
          crystal-clear viewing experience! #TelevisionMender #FixItInAMinute</p>
        </div>
      </div>
    </div> */}
    <div className="book-container">
      <div className="book pb-6">
        <div className="one"></div>
        <div className="two"></div>
      </div>
    </div>
        {/* <details className="text-sm my-5 px-5">
          <summary>A Click, A Fix, A Wow – Thank You, JPPromend!<span></span></summary>
        <div>Can I work on a project I started before the hackathon? Can I work on a project I
           started before the hackathon
           </div>
        </details>
        <details className="text-sm my-5 px-5">
          <summary>From Fuzzy to Fantastic – JPPromend Delivers!<span></span></summary>
        <div>Can I work on a project I started before the hackathon? Can I work on a project I
           started before the hackathon
           </div>
        </details> */}
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
