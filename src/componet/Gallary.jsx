import { Paper, Button, Grid, Typography,  } from '@mui/material'
import React, { useState } from 'react'
import Birthday from './../Asset/Birthday.jpg'
import wedding from './../Asset/wedding.jpg'
import grad from './../Asset/gradpic.jpeg'
import Wedding from './LightBox/Wedding'
import Birth from './LightBox/Birth'
import Grad from './LightBox/Grad'
import BridalShower from './LightBox/BridalShower'
import Baner from './LightBox/Baner'



function Gallary() {
  const [open , setOpen]=useState(false)
  return (
    <div id='gallary'>
      <Typography variant='h2' textAlign='center'color='#545fc4' fontFamily="poppins"> Gallery</Typography>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  margin={0}
  padding={0}
  spacing={1}
 
>
  <Grid item xs={4}>
    <Paper elevation={16}  sx={{
      width:400,
      height:400,
      bgcolor:'#545fc4',
      padding:2,
      textAlign:'center',
      borderRadius:3
     
    
    }}>
      <Typography variant='h5' fontFamily='poppins' color='white'>Birthday Pictures</Typography>
      <img src={Birthday} alt='birthday img' width='100%' height={300} style={{borderRadius:'10px'}}/>
      <Typography variant='body1' fontFamily="poppins" color='white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit!</Typography>
      <Button variant="outline  " sx={{ marginY:1}} onClick={() => setOpen(true)}>
              See More
            </Button>
<Birth open={open} close={()=>setOpen(false)}/>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper elevation={16} sx={{
   width:400,
   height:400,
   bgcolor:'#545fc4',
   padding:2,
   textAlign:'center',
   borderRadius:3
  
      
   
    }}> 
    <Typography variant='h5' fontFamily='poppins' color='white'>Wedding Pictures</Typography>
    <img src={wedding} alt='birthday img' width='100%' height={300} style={{borderRadius:'10px'}}/>
    <Typography variant='body1' fontFamily='poppins' color='white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit!</Typography>
      <Button variant="outline" sx={{ marginY:1}} onClick={()=>setOpen(true)}>
              See More
            </Button>
            <Wedding open={open} close={()=>setOpen(false)}/>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper elevation={16} sx={{
      bgcolor:'primary.main',
   
      width:400,
      height:400,
      bgcolor:'#545fc4',
      padding:2,
      textAlign:'center',
      borderRadius:3
    }}>
    <Typography variant='h5' fontFamily='poppins' color='white' >Graduation Pictures</Typography>
    <img src={grad} alt='birthday img' width='100%' height={300} style={{borderRadius:'10px'}}/>
    <Typography variant='body1' fontFamily='poppins' color='white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit!</Typography>
    <Button variant="outline" sx={{marginY:1}} onClick={()=>setOpen(true)}>
              See More
            </Button>
            <Grad open={open} close={()=>setOpen(false)}/>
    </Paper>
  </Grid>

</Grid>

    </div>
  )
}

export default Gallary