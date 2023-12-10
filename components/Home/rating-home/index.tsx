import RatingSection from "./RatingSection";
import TrustText from "./TrustText";
import {SectionTrustRating} from "./style";

const index = ()=>{
    return(
        <SectionTrustRating>
            <div className="flex w-1/2 max-md:w-11/12 min-w-mx mx-5 bg-[#e3e3e3]/10">
                <RatingSection/>
            </div>
            <TrustText/>
        </SectionTrustRating>
    )
}
export default index