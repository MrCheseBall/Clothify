import MainCarousel from "../../components/homeCarosel/maincarosel";
import HomeSectionCarosel from "../../components/homeSectionCarosel/homeSectionCarosel";

const HomePage = () => {
    return ( <div>
        <MainCarousel/>
        <div className="space-y-10 py-20">
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>

        </div>
    </div> );
}
 
export default HomePage;