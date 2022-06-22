import { Box } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function Iconify({ icon, width, color, ...other }) {
  return <Icon icon={icon} width={width} color={color} />;
}
