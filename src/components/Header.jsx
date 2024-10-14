// import React from 'react';
// import { HStack, Text } from '@chakra-ui/react';


// function Header() {
//   return (
//     <HStack 
//       spacing={["16", "50"]} 
//       p={9} 
//       justifyContent={["center", "flex-end"]} 
//       color={"black"} 
//       bgColor={'pink'}
//     >
//       {['Home', 'About', 'Testimonials', 'Services', 'Hire Me'].map((menuItem) => (
//         <Text 
//           key={menuItem} 
//           fontSize="lg" 
//           fontWeight="bold" 
//           cursor="pointer" 
//           _hover={{ color: "white", transform: "scale(1.1)", transition: "all 0.3s ease" }} 
//           _active={{ color: "gray.400" }} 
//           color="purple.700"
//         >
//           {menuItem}
//         </Text>
//       ))}
//     </HStack>
//   );
// }

// export default Header;

import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from '../ColorModeSwitcher';

function Header() {
  return (
    <HStack 
      spacing={["16", "50"]} 
      p={7} 
      justifyContent={["center", "flex-end"]} 
      color={"black"} 
      bgColor={'pink'}
    >
      {['Home', 'About', 'Testimonials', 'Services', 'Hire Me'].map((menuItem) => (
        <Link to={`/${menuItem.toLowerCase().replace(/\s/g, '-')}`} key={menuItem}>
          <Text 
            fontSize="lg" 
            fontWeight="bold"
            cursor="pointer" 
            _hover={{ color: "white", transform: "scale(1.1)", transition: "all 0.3s ease" }} 
            _active={{ color: "gray.400" }} 
            color="purple.700"
          >
            {menuItem}
          </Text>
        </Link>
      ))}
      <ColorModeSwitcher />
    </HStack>
  );
}

export default Header;

