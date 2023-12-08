import {Liwrapper, TrustTextWrapper} from "./style";
import {rating_text} from "./ratiingData"



const TrustText:() => JSX.Element = ()=>{
    return(
        <TrustTextWrapper>
            <h2 className="text-xl md:text-3xl font-bold lg:text-5xl text-custom-dark my-5">Trust and safety features for your protection</h2>
            {rating_text.map(({svg, caption, mainText})=>(
                <Liwrapper key={caption + "key"}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                {svg}
                </svg>
                    <div>
                        <p className="text-custom-dark my-5 text-base font-bold">{caption}</p>
                        <p className="py-5">{mainText}</p>
                        <span>read  more</span>
                    </div>
                </Liwrapper>
            ))}
            
        </TrustTextWrapper>
    )
}
export default TrustText;
