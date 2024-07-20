import HomeSectionCard from '../homeSectionCard/homeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useState } from "react";



const HomeSectionCarosel = ({data,sectionName}) => {
    const [activeIndex,setActiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);
    const assignActiveIndex=({item})=>setActiveIndex(item);
    
    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />)
    return (
        <div className="relative px-4 lg:px-8">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5 border ">
                <AliceCarousel
                    items={items}
                    // disableButtonsControls
                    disable disableDotsControls
                    // autoPlay
                    // autoPlayInterval={1500}
                    responsive={responsive}
                    onSlideChanged={assignActiveIndex}
                    activeIndex={activeIndex}
                />
                {/* {activeIndex!==items.length-5&&<button variant="contained" 
                    className="absolute z-50" 
                    onClick={slideNext}
                    style={{ top: "50%", right: "0", transform: "translateY(-50%)" }} 
                    aria-label="next">
                <ArrowBackIosNewIcon sx={{transform:"rotate(-180deg)"}}/></button>}
               { activeIndex!==0&&<button variant="contained" 
                    className="absolute z-50" 
                    onClick={slidePrev}
                    style={{ top: "50%", left: "0", transform: "translateY(-50%)" }} 
                    aria-label="next">
                <ArrowBackIosNewIcon sx={{transform:"rotate(0deg)"}}/></button>} */}
            </div>
        </div>
    );
}

export default HomeSectionCarosel;