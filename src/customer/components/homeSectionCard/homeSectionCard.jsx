const HomeSectionCard = () => {
    return ( <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem]] w-[10rem]">
            <img className="object-cover object-top w-full h-full" src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/1/6/1603blk_main.jpg"alt=""/>
        </div>

        <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
            <p className="mt-2 text-sm text-gray-500">Precious Multi-Color Shibori Printed Satin Event Wear Co-Ord Set</p>
        </div>

    </div> );
}
 
export default HomeSectionCard;