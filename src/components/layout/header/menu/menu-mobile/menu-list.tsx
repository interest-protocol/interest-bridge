import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SIDEBAR_ITEMS } from '../../sidebar/sidebar.data';
import SideBarMenuListItem from './menu-list-item';

const MobileMenuList: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap="s">
      {SIDEBAR_ITEMS.map((item, index) => (
        <SideBarMenuListItem key={v4()} index={index} {...item} />
      ))}
    </Box>
  );
};

export default MobileMenuList;
