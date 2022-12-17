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
    <Box
   
marginY={15}
      
    >
      <Typography variant="h2" textAlign="center" color="#545fc4" marginY={10} fontFamily="poppins">
        
        Service
      </Typography>
      <Box display='flex'justifyContent='space-between' alignItems='center'   sx={{ marginX:2, 
                }}>
      
      <Stack  >
    <img src={svg} alt='svg' width={700} height={400}/>
   
    </Stack>
  
      <Stack
         width={550}  spacing={4} >
      <Typography variant='h4' fontFamily="poppins"> We Got Everything </Typography>
      <Typography variant='body' fontFamily="poppins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid sunt qui perferendis! Asperiores dolor laboriosam ipsa. Error, harum aliquid?</Typography>
      <Stack direction='row ' spacing={6}>
      <Box>
<img src={grad} alt="img" style={{ width: 110, height: 100 }} />
<p>Graduation</p>
</Box>
<Box>
<img src={birth} alt="img" style={{ width: 110, height: 100 }} />
<p>Birthday</p>
</Box>
<Box>
<img
  src={weeding}
  alt="img"
  style={{ width: 110, height: 100 }}
/>
<p fontFamily="poppins"> Weeding</p>
</Box>
<Box>
<img
  src={bussiness}
  alt="img"
  style={{ width: 110, height: 100 }}
/>
   <p>Buissines Cards</p>
</Box>
      </Stack>
      <ModalBook />
            </Stack>
      
     
    </Box>
    </Box>
    </div>
  );
}

export default Service;
