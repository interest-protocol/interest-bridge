import { Box, lightTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Routes, RoutesEnum } from '../../../../constants';
import { LogoSVG } from '../../../svg';
import { SideBarHeaderProps } from './sidebar.types';

const SideBarHeader: FC<SideBarHeaderProps> = ({ isCollapsed }) => (
  <a href={Routes[RoutesEnum.Home]}>
    <Box
      textAlign="center"
      position="relative"
      width={isCollapsed ? '2.5rem' : '100%'}
      height={isCollapsed ? '2.5rem' : 'unset'}
      bg={isCollapsed ? lightTheme.colors.primary : 'unset'}
      display={isCollapsed ? 'flex' : 'block'}
      borderRadius="m"
      alignItems="center"
      justifyContent="center"
    >
      <LogoSVG
        full={!isCollapsed}
        maxWidth={isCollapsed ? '1.5rem' : '100%'}
        maxHeight={isCollapsed ? '1.5rem' : '2.6rem'}
        height="100%"
        fill={isCollapsed ? 'white' : undefined}
      />
    </Box>
  </a>
);

export default SideBarHeader;
