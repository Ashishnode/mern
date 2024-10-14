// this is  defult theme
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light', // or 'dark'
  useSystemColorMode: false, // If true, it uses the system's color mode preference
};

const theme = extendTheme({ config });

export default theme;
