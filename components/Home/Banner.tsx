import SearchSection from "./SearchSection"
import {BannerWrapper} from "./homeStyle"

const Banner = () => {
  return (
    <BannerWrapper  className="main"
    style={{backgroundImage: `url(${"/images/banner-1.jpeg"})`}}
    >
        <SearchSection/>
    </BannerWrapper>
  )
}

export default Banner