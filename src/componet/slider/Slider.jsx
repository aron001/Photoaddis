import { IconButton, } from '@mui/material';
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Stack } from '@mui/system';
import {AiFillPhone} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'



function Slider() {
  const items=[
    {
      id:1,
      src:require('./../../Asset/oromo2.jpg'),
      title:'girl'
    },
    { id:2,
      src:require('./../../Asset/gurage.jpg'),
      title:'omo vally'
    },
    { id:3,
      src:require('./../../Asset/girlwithcamera.jpg'),
    title:'gurage'
    },
    {
      id:4,
      src:require('./../../Asset/gurage.jpg'),
      title:'gurage'
    },
    {id:5,
      src:require('./../../Asset/gurage2.jpg'),
      title:'gurage'
    },
    {id:6,
      src:require('./../../Asset/oromogirls.jpg'),
      title:'oromo'
    },
    {id:7,
      src:require('./../../Asset/oromo2.jpg'),
      title:'oromo'
    },

  ];
  return (
    <Carousel
    
    >
      
      {
        items.map( item =><Box
        sx={{
          textAlign:'center',
          color:'#13701b',
          gap:30,
          fontSize:20
        }}
        ><img src={item.src} alt={item.title} style={{width:'100%',height:'80vh'}}/>
                  <Stack direction='row' spacing={6} alignItems='center' justifyContent='center' >
<IconButton color='primary' back size='large'>
  
  <AiFillPhone/>

</IconButton>
<IconButton color='primary' back size='large'>
  
  <BsTelegram/>

</IconButton>
<IconButton color='primary' back size='large'>
  
  <AiFillInstagram/>

</IconButton>
</Stack>
        </Box>) 
        
        
        
        
    }
    
      
 
   
</Carousel>
  )
}


export default Slider