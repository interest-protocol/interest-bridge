import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import MenuSettingsList from '../../settings/menu-settings/settings-list';
import { MainMenuProps } from '../menu.types';
import MobileMenuList from './menu-list';

const MainMenu: FC<MainMenuProps> = ({ openLanguageMenu }) => {
  return (
    <Box
      variant="container"
      justifyItems="unset"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      m="0 1.25rem"
      pt="2.875rem"
    >
      <Box zIndex="2" gridColumn="1/-1">
        <Typography m="xl" variant="small" color="onSurfaceVariant">
          Menu
        </Typography>
        <MobileMenuList />
        <Motion
          zIndex={1}
          initial="open"
          bg="surface.container"
          textTransform="capitalize"
          animate="open"
          pt="xl"
        >
          <MenuSettingsList openLanguageMenu={openLanguageMenu} />
        </Motion>
      </Box>
    </Box>
  );
};

export default MainMenu;
