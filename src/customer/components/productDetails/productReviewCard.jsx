import {Box,Avatar, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white 'sx={{width:56,height:56,bgcolor:"#9155fd"}}>A</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <p>Sekh</p>
                <p>November 4, 2001</p>
            </div>
            <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
            <p>
                Nice product. I love this shirt.
            </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
