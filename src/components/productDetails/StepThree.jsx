import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { YouMight } from '../../data/you-might';
import { ShopCard } from '../home/ShopCard';

export const StepThree = () => {
    return (
        <>
        <Box textAlign="center" sx={{mt:10}}>
         <Typography variant="h3" sx={{alignItems:"center"}}><strong>YOU MIGHT ALSO LIKE</strong> </Typography>  
         </Box> 

         <Grid sx={{my:5}}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        borderRadius={20}
      >
        {YouMight.map((imageInfo) => {
          return (
            <ShopCard 
              key={imageInfo.id}
              name={imageInfo.name}
              amount={imageInfo.amount}
              rating={imageInfo.rating}
              sourceImage={imageInfo.sourceImage}
              percentage={imageInfo.percentage}
              
            />
            
          );
        })}
      </Grid>




        </>
    )
}
