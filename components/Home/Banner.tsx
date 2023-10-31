import {BannerWrapper} from "./homeStyle"

const Banner = () => {
  return (
    <BannerWrapper style={{backgroundImage: `url(${"../images/banner-1.jpg"})`,
}} className="main">
        hi how are you
    </BannerWrapper>
  )
}

export default Banner