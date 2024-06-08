import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSelector from '../LanguageSelection';
import { useTranslation } from 'react-i18next';

function Header() {
  const onClick = () => {
    window.location.href = "#about";
  };

  const onClick1 = () => {
    window.location.href = "#skills";
  };

  const onClick2 = () => {
    window.location.href = "#projects";
  };

  const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0.8)');
  const [color, setColor] = useState('rgba(0, 0, 0, 0.8)');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {t} = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBgColor('rgba(0, 0, 0, 0.8)');
        setColor('white');
      } else  {
        setBgColor('rgba(255, 255, 255, 0.8)');
        setColor('rgb(52, 71, 103)');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   
      <AppBar  sx={{
        width: {xs:'100%' , md:'50%'},
        transform: {md:'translateX(-50%)'},
        backgroundColor: bgColor,
        color: color,
        boxShadow: 'none',
        zIndex: 1100,
        borderRadius: '20px',
        marginTop: '10px',
        position:{ xs: 'fixed', md: 'fixed' }
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button onClick={onClick} color="inherit">{t('about_me')}</Button>
            <Button onClick={onClick1} color="inherit">{t('Skills')}</Button>
            <Button onClick={onClick2} color="inherit">{t('Projects')}</Button>
            <LanguageSelector sx={{color: color,backgroundColor: bgColor}}/>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { handleClose(); onClick(); }}>{t('about_me')}</MenuItem>
            <MenuItem onClick={() => { handleClose(); onClick1(); }}>{t('education')}</MenuItem>
            <MenuItem onClick={() => { handleClose(); onClick2(); }}>{t('Projects')}</MenuItem>
            <LanguageSelector sx={{color: color,backgroundColor: bgColor}}/>
          </Menu>
          
        </Toolbar>
      </AppBar>
 
    
  );
}

export default Header;
