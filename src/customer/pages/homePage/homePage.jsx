import { mens_kurta } from "../../../data/mens_kurta";
import MainCarousel from "../../components/homeCarosel/maincarosel";
import HomeSectionCarosel from "../../components/homeSectionCarosel/homeSectionCarosel";

const HomePage = () => {
    return ( <div>
        <MainCarousel/>
        <div className="space-y-10 py-20">
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men, shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's pant"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shoes"}/>

        </div>
    </div> );
}
 
export default HomePage;