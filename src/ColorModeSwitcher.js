import React from 'react';
import { useColorMode, Button, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
