import { Box } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function Iconify({ icon, width, color, ...other }) {
  return (
    <Box
      as={Icon}
      sx={{ height: '30px', width: '30px' }}
      icon={icon}
      width={width}
      color={color}
    />
  );
}
