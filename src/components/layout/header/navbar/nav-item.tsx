import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NavItemText from './nav-item-text';
import { NAVBAR_ICONS } from './navbar.data';
import { NavItemProps } from './navbar.types';

const NavItem: FC<NavItemProps> = ({ path, item }) => {
  const notDesktop = item === 'home';
  const isSelected = false;
  const Icon = NAVBAR_ICONS[item];

  return (
    <Box display={['block', 'block', notDesktop ? 'none' : 'block']}>
      <a href={path}>
        <Box
          display="flex"
          alignItems="center"
          color={[
            isSelected ? 'primary' : 'textSoft',
            isSelected ? 'primary' : 'textSoft',
            isSelected ? 'primary' : 'text',
          ]}
        >
          <Box height="1rem" display={['block', 'block', 'none']}>
            <Icon maxWidth="1rem" maxHeight="1rem" height="100%" />
          </Box>
          <NavItemText isSelected={isSelected}>{item}</NavItemText>
        </Box>
      </a>
    </Box>
  );
};

export default NavItem;
