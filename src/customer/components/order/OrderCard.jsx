import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();

  return (
    
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
        <Grid item sx={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://imgs.search.brave.com/6_H26W4X5EIhtbgs3k1pZjlBCAGrNxZqwsFBoGKRXNc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9q/ZWFuc18xMjAzLTgw/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" alt="" />
                <div className='ml-5 space-y-2'>
                    <p>Men slim Mid Black jens</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>₹1099</p>
        </Grid>
        <Grid item xs={3}>
            {true && <div>
              <p>
              <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
              <span>
                Delivered on march 03
              </span>
            </p>
            <p className='text-xs'>
              Your Item has been delivered
            </p>
            </div>}
            {false && <p>
              <span>
                Expected Delivery on march 03
              </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
