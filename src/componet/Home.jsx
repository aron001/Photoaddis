import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import foto from "./../Asset/foto.jpg";
import service from "./../Asset/service.jpg";
import grad from "./../Asset/grad.png";
import birth from "./../Asset/birth.png";
import weeding from "./../Asset/weeding.png";
import bussiness from "./../Asset/bussiness.png";
import { styled } from "@mui/material/styles";

function Home() {

  const Contresponsive=styled(Container)(({theme})=>({
    [theme.breakpoints.down("lg")]:{
    
    },
    [theme.breakpoints.up("md")]:{
   display:'flex',
   margin:10,
   justifyContent:"space-between",
   bgcolor:'red'
  
   
     }
  }))
  return (
    <div id='aboutus'>
    <Box sx={{overflowX:'hidden'}}>
      <Box sx={{ marginY: 10 }}>
        <Typography variant="h2" sx={{ color: "#545fc4", textAlign: "center" ,fontFamily:'poppins'}}>
          About Us
        </Typography>
        <Contresponsive
         
        >
          <Box>
            <img
              src={foto}
              alt="camera"
              style={{
                borderRadius: 10,
                background: "linear-gradient(blue, pink)",
                maxWidth:'100%'
              }}
            />
          </Box>
          <Box>
            <Typography variant="h2" fontFamily='Poppins'>Photo Addis </Typography>
            <Typography variant="body1 " sx={{  color:'#0C1F09' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              dolores accusantium dignissimos aperiam nesciunt consequuntur quia
              excepturi temporibus quam. Labore deserunt itaque possimus. Iste
              alias totam laboriosam ea doloribus minima esse voluptas eligendi,
              sequi, officia cumque. Numquam, obcaecati! Sapiente voluptas
              debitis molestiae laudantium quo. Ratione in impedit velit dolorum
              rem!
            </Typography>
            <Typography variant="body1" sx={{ marginY: 2.5 ,color:'#0C1F09', fontFamily:'poppins'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              excepturi harum delectus hic dolorum. Aliquam officiis tempora
              natus fugiat sint qui fugit autem accusamus sed! Aliquid dolores
              natus repudiandae sint!
            </Typography>
            <Button variant="contained" sx={{ background: "#545fc4" }}>
              Read more
            </Button>
          </Box>
        </Contresponsive>
      </Box>

      <Box sx={{ marginY: 10 }}>
        <Typography variant="h2" sx={{ color: "#545fc4", textAlign: "center" ,fontFamily:'poppins'}}>
          Service we Provide
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: {xs:10, sm:20},
            marginY: 10,
            justifyContent: "space-between",
            flexDirection:{xs:'column',md:'row',sm:'column'},
            alignItems:'center',  
            Width:'100%',
            

          
          }}
        >
          <Box width='100%'>
            <Typography variant="h2" fontFamily="poppins">Photo Addis </Typography>
            <Typography variant="body1"  sx={{  color:'#0C1F09', fontFamily:'poppins' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              dolores accusantium dignissimos aperiam nesciunt consequuntur quia
              excepturi temporibus quam. Labore deserunt itaque possimus. Iste
              alias totam laboriosam ea doloribus minima esse voluptas eligendi,
              sequi, officia cumque. Numquam, obcaecati! Sapiente voluptas
              debitis molestiae laudantium quo. Ratione in impedit velit dolorum
              rem!
            </Typography>
            <Typography variant="body1" sx={{ marginY: 2.5 , color:'#0C1F09' ,fontFamily:'poppins'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. heh
              hfhghrfv hcjhiurvitbjvjtyij ehjbfehbfrh photo addis
            </Typography>
            <Box
              sx={{
                display: {xs:'block',md:'flex'},
                rowGap: 10,
                borderRadius: 2,
              }}
            >
              <img src={grad} alt="img" style={{ width: 110, height: 100 }} />
              <img src={birth} alt="img" style={{ width: 110, height: 100 }} />
              <img
                src={weeding}
                alt="img"
                style={{ width: 110, height: 100 }}
              />
              <img
                src={bussiness}
                alt="img"
                style={{ width: 110, height: 100 }}
              />
            </Box>
          </Box>
          <Box sx={{display:{xs:'none' ,md:'block'}}}width='60%'>
            <img
              src={service}
              alt="camera"
           
              style={{
                borderRadius: 10,
                background: "linear-gradient(blue, pink)",
                maxWidth:'50%'
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
    </div>
  );
}

export default Home;
