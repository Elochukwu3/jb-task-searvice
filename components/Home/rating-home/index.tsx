import RatingSection from "./RatingSection";
import TrustText from "./TrustText";
import {SectionTrustRating} from "./style";

const index = ()=>{
    return(
        <SectionTrustRating>
            <div className="flex flex-col w-1/2 max-md:w-10/12 max-h-full max-md:h-[380px]  mx-5 bg-[#e3e3e3]/10">
                <RatingSection/>
            </div>
            <TrustText/>
        </SectionTrustRating>
    )
}
export default index