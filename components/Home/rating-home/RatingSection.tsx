import Image from "next/image";

const RatingSection = ()=>(
    <div>
        <div className="shado shadow-inner shadow-black flex items-center gap-3 p-5 w-fit bg-white border border-blue-100 rounded-xl">
            <span className="block object-contain w-20 h-20 rounded-full relative "><Image src="/images/rounded-profile.png" alt="rate" fill  /></span>
            <div>
            <p>
            <span className="inline text-3xl mx-2 font-bold">5.0</span>
            <span className="inline">star</span>
            </p>
            <span className="capitalize font-bold text-lg text-black/70">overall rating</span>
            </div>
        </div>
        <div>
        <Image src="/images/rating_image.png" alt="rating" height={500} width={400} />
        </div>
    </div>
)
export default RatingSection
{/* <div class="life_moments_task__StarsWrapper-sc-wxmvq5-7 ca-dScc">
    <svg height="20" width="20" class="life_moments_task__TaskStar-sc-wxmvq5-3 eqHiQ" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.45 14.975 5.825 22 12 18.275 18.175 22l-1.625-7.025L22 10.25l-7.2-.625L12 3 9.2 9.625 2 10.25l5.45 4.725Z" clip-rule="evenodd"></path></svg><p class="Text__StyledTypographyComponent-sc-35e02v-0 gPXymA life_moments_task__TaskStarCount-sc-wxmvq5-2 iPYxeg">5 Stars</p></div> */}