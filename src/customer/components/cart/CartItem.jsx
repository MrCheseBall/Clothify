import { IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react'
import { Button } from '@headlessui/react';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://imgs.search.brave.com/t2hUMw59MYcSxfRFNtgZLhyfnx7BRdy5N77NUNH5CEU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdmEuY29tL2Nk/bi9zaG9wL3Byb2R1/Y3RzL1Rhc3ZhRGF5/MTI1MDg3LmpwZz92/PTE2NTYwNTE3MjQm/d2lkdGg9ODAw" alt="" />
            </div>
            <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men mid rise black kurta</p>
                    <p className='opacity-70 '>Size: L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Crystalia fashion</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>
                        Rs 199
                        </p>
                        <p className='capacity-50 line-through'>
                            Rs 211
                        </p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>

            </div>
            

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                      <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton>
                      <AddCircleOutlineIcon/>
                    </IconButton> 
                    
                </div>
                <div>
                    <Button>remove</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem
