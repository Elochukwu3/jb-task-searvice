import CardParallax from "@components/projectCard/CardParallax";

 const LocationPage =()=>{
    return(
        <div>
         <CardParallax color={"black"} index={0} />
        <CardParallax color={"green"} index={1} />
        <CardParallax color={"blue"} index={2} />
        <CardParallax color={"grey"} index={3} />
        </div>
    )
}
export default LocationPage;