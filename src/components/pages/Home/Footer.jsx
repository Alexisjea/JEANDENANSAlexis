import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar  sx={{ top: "auto", bottom: 0, marginTop:2 }}>
      <Toolbar>
        <Box sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography variant="body1" color="inherit">
             IPSSIExpressFood © 2024
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
