import SearchSection from "./SearchSection"
import {BannerWrapper} from "./homeStyle"

const Banner = () => {
  return (
    <BannerWrapper style={{backgroundImage: `url(${"../images/banner-1.jpg"})`,
}} className="main">
        <SearchSection/>
    </BannerWrapper>
  )
}

export default Banner