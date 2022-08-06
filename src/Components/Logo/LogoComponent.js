import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";

const LogoComponent = (props) => {
  return(
      <>
          <Box color="background.paper" sx={{display: {xs: 'flex', md: 'flex'},flexGrow:{xs:1, md:2.5},
              justifyContent:{xs:props.position} }} >
              <AddShoppingCartIcon sx={{m:{xs:2}}} style={{color: '#db5f51' }}/>
              <Typography sx={{mt:{xs:1, md:1}}} color={props.textColor} variant="h6" fontWeight="fontWeightBold" noWrap component="a" style={{margin:'12px 0 0 0' }}>
                  SWAPEE
              </Typography>
          </Box>

      </>
  );
}

export default LogoComponent;
