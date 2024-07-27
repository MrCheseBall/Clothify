import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import CartItem from '../cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
          <AddressCard/>
      </div>

      <div>
            <div className='lg:grid grid-cols-3 mt-10 relative'>
                <div className='col-span-2'>
                    {[1,1,1,1].map((item)=><CartItem/>)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <div className='mr-3 ml-3'>
                        <p className='uppercase font-bold opacity-60 pb-4 mt-2'>PRICe DETAILS</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black font-bold'>
                                <span>Price</span>
                                <span>₹4697</span>
                            </div>
                        </div>
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className=' text-green-600'>-₹3419</span>
                            </div>
                        </div>
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery charge</span>
                                <span className=' text-green-600'>Free</span>
                            </div>
                        </div>
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black font-bold'>
                                <span>Total Amount</span>
                                <span className=' text-green-600'>₹1278</span>
                            </div>
                        </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OrderSummary
