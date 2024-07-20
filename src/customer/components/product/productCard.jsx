import React from 'react'
import "./productCard.css"
const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='has-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl}></img>
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold capacity-60'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>{product.discountedPrice}</p>
          <p className='line-through capacity-50'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPercent}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
