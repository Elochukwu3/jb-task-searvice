import Image from "next/image";
import { ProductCardWrapper } from "./cardStyles";
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
        <span
          className="inline-flex items-center px-3 py-1 text-sm font-medium text-center
         text-white bg-custom-greaner rounded-full mx-auto hover:bg-bg-custom-dark focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </span>
      </div>
      <div className="bg-white absolute z-20 inset-x-0 bottom-0 top-5 overflow-y-auto no-scrollbar">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mount a TV, art or shelves
        </h5>
        <div className="overflow-x-scroll no-scrollbar flex gap-5 w-10/12 ml-auto bg-white">
          <div className="h-40 relative w-28 rounded-md overflow-hidden shrink-0">
            <Image
              src="/images/banner-1.jpg"
              alt="card"
              fill
              objectFit={"cover"}
            />
          </div>
          <div className="h-40 relative w-28 rounded-md overflow-hidden shrink-0">
            <Image
              src="/images/banner-1.jpg"
              alt="card"
              fill
              objectFit={"cover"}
            />
          </div>
          <div className="h-40 relative w-28 rounded-md overflow-hidden shrink-0">
            <Image
              src="/images/banner-1.jpg"
              alt="card"
              fill
              objectFit={"cover"}
            />
          </div>
        </div>
        <p className="text-sm p-5 bg-green-50">
          Transform your TV troubles into triumphs with Television Mender! 🛠️
          Say goodbye to fuzzy screens and pixelated problems. Our expert team
          is here to rescue your favorite shows and movies. Fast, reliable, and
          hassle-free TV repair, right at your fingertips. Click, mend, and get
          back to binge-watching bliss! 📺✨ Visit our website now for a
          crystal-clear viewing experience! #TelevisionMender #FixItInAMinute
        </p>
        <ul className="text-sm my-5">
            <li>Seamless Symmetry, Seamless Satisfaction!</li>
            <li>A Click, A Fix, A Wow – Thank You, JPPromend!</li>
            <li>From Fuzzy to Fantastic – JPPromend Delivers!</li>
        </ul>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
