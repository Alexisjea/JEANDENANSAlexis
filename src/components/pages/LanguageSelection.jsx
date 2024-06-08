import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select } from '@mui/material';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0.8)');
  const [color, setColor] = useState('rgba(0, 0, 0, 0.8)');

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBgColor('rgba(0, 0, 0, 0.8)');
        setColor('white');
      } else {
        setBgColor('rgba(255, 255, 255, 0.8)');
        setColor('rgb(52, 71, 103)');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Select
      value={i18n.language}
      onChange={changeLanguage}
      sx={{height:'40px',backgroundColor: bgColor,
        color: color,boxShadow: 'none',borderRadius: '30px',}}
      
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="fr">Français</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
