import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import ModalBook from "../ModalBook";
import grad from "./../Asset/grad.png";
import birth from "./../Asset/birth.png";
import weeding from "./../Asset/weeding.png";
import bussiness from "./../Asset/bussiness.png";
import svg from './../Asset/tp.png'

function Service() {
  return (
    <div id='service'>
    <Box sx={{overflow:"hidden", marginTop:0}}
   
marginY={0}
      
    >
      <Typography variant="h2" textAlign="center" color="#545fc4" marginY={0} fontFamily="poppins">
        
        Service
      </Typography>
      <Box justifyContent='space-between' alignItems='center'   sx={{ marginX:2, display:{xs:'block',md:'flex'}
                }}>
      
      <Stack  sx={{width:{xs:300}}}>
        <Box sx={{display:{xs:'none',sm:'block'}}}>
          <img src={svg} alt='svg' width={400} height={400}/>
        </Box>
    
   
    </Stack>
  
      <Stack
         width={550}  spacing={4} sx={{width:{xs:300}}}>
      <Typography variant='h4' fontFamily="poppins"> We Got Everything </Typography>
      <Typography variant='body' fontFamily="poppins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid sunt qui perferendis! Asperiores dolor laboriosam ipsa. Error, harum aliquid?</Typography>
      <Stack direction='row ' spacing={6}>
      <Box sx={{display:{xs:'flex'}}}>
      <Box sx={{width:{xs:50},marginLeft:{xs:-2}}}>
<img src={grad} alt="img" style={{ width: 110, height: 100 }} />
<p>Graduation</p>
</Box>
<Box sx={{width:{xs:50},marginLeft:{xs:5},marginRight:{xs:2}}}>
<img src={birth} alt="img" style={{ width: 110, height: 100 }}sx={{width:{xs:50}}} />
<p>Birthday</p>
</Box>
<Box sx={{width:{xs:50},marginLeft:{xs:2},marginRight:{xs:2}}}>
<img
  src={weeding}
  alt="img"
  style={{ width: 110, height: 100 }}sx={{width:{xs:50}}}
/>
<p fontFamily="poppins"> Weeding</p>
</Box>
<Box sx={{width:{xs:50},marginLeft:{xs:2},marginRight:{xs:2}}}>
<img
  src={bussiness}
  alt="img"
  style={{ width: 110, height: 100 }}sx={{width:{xs:50}}}
/>
   <p>Buissines Cards</p>
</Box></Box>
      </Stack>
      <ModalBook />
            </Stack>
      
     
    </Box>
    </Box>
    </div>
  );
}

export default Service;
