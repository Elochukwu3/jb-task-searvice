import { Liwrapper, TrustTextWrapper } from "./style";
import { rating_text } from "./ratiingData";

const TrustText: () => JSX.Element = () => {
  return (
    <TrustTextWrapper>
      <h2 className="max-sm:text-center text-xl max-sm:px-3 md:text-3xl font-bold lg:text-5xl my-5 pb-3 text-ellipsis">
        Trust and safety features for your protection
      </h2>
      {rating_text.map(({ svg, caption, mainText }) => (
        <Liwrapper key={caption + "key"}>
         <span> {svg()}</span>
          <div>
            <p className=" font-bold text-xl leading-6 tracking-tighter break-words">
              {caption}
            </p>
            <p className="py-2  text-lg font-satoshi">{mainText}</p>
            <span className="text-custom-greaner font-bold">read more</span>
          </div>
        </Liwrapper>
      ))}
    </TrustTextWrapper>
  );
};
export default TrustText;
