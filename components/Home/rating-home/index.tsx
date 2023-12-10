import RatingSection from "./RatingSection";
import TrustText from "./TrustText";
import {SectionTrustRating} from "./style";

const index = ()=>{
    return(
        <SectionTrustRating>
            <div className="flex w-1/2 min-w-mx mx-5 bg-green-600">
                <RatingSection/>
            </div>
            <TrustText/>
        </SectionTrustRating>
    )
}
export default index