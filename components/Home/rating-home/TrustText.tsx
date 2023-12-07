import {Liwrapper, TrustTextWrapper} from "./style";
import {rating_text} from "./ratiingData"



const TrustText = ()=>{
    return(
        <TrustTextWrapper>
            <h2>Trust and safety features for your protection</h2>
            {rating_text.map(({svg, caption, mainText})=>(
                <Liwrapper key={caption + "key"}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                {svg}
                </svg>
                    <div>
                        <p>{caption}</p>
                        <p>{mainText}</p>
                        <span>read  more</span>
                    </div>
                </Liwrapper>
            ))}
            
        </TrustTextWrapper>
    )
}
export default TrustText;
