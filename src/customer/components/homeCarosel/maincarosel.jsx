import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarosalData } from './mainCaroselData'; // Adjust the path to the correct location of your data

const MainCarousel = () => {
    let items = MainCarosalData.map((item) => (
        <img className='cursor-pointer ' role='presentation' src={item.image} alt=''/>
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1500}
            infinite
            
        />
    );
};

export default MainCarousel;
