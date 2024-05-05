import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar  sx={{height:"150px", top: "auto", bottom: 0, marginTop:2  }} position="relative">
      <Toolbar >
        <Box sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography variant="body1" color="inherit" sx={{marginTop:"50px"}}>
             Portfolio - JEANDENANS Alexis © 2024
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
