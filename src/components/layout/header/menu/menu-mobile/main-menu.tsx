import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import MobileMenuList from './menu-list';

const MainMenu: FC = () => {
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
      </Box>
    </Box>
  );
};

export default MainMenu;
