import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { SwitchLang } from '..';
import SEO from '../SEO';
import Sidebar from './header/sidebar';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  pageTitle = '',
}) => {
  const { colors, radii } = useTheme() as Theme;

  return (
    <Box color="text" height="100vh" display="flex" flexDirection="column">
      <SEO pageTitle={pageTitle} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: '1px solid',
            borderRadius: radii.m,
            color: colors.onSurface,
            background: colors.surface,
            borderColor: colors['primary.onPrimaryContainer'],
          },
          duration: 10000,
        }}
      />
      <Box bg="surface" display="flex" height="100vh" overflow="hidden">
        <Sidebar />
        <Box as="main" flex="1" minHeight="100vh" overflow="auto" px="1.5rem">
          <Box
            as="header"
            display="flex"
            variant="container"
            justifyContent="flex-end"
            pr={['unset', 'unset', 'unset', 'xl']}
          >
            <Box display="flex" justifyContent="space-between">
              <SwitchLang isMobile={false} />
            </Box>
          </Box>
          {children}
        </Box>
      </Box>
      <Tooltip />
    </Box>
  );
};

export default Layout;
