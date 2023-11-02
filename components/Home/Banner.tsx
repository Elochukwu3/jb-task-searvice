import SearchSection from "./SearchSection"
import {BannerWrapper} from "./homeStyle"

const Banner = () => {
  return (
    <>
    <BannerWrapper  className="main " 
    style={{backgroundImage: `url(${"/images/banner-1.jpg"})`}}>
      <SearchSection isBool={true}/>
    </BannerWrapper>
      <SearchSection/>
    </>
  )
}

export default Banner