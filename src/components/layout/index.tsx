import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { TOAST_DURATION } from '../../constants';
import useEventListener from '../../hooks/use-event-listener';
import SEO from '../SEO';
import Header from './header';
import Settings from './header/settings';
import Sidebar from './header/sidebar';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  pageTitle = '',
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { colors, radii, breakpoints, dark } = useTheme() as Theme;

  const handleSetDesktopView = () =>
    setIsDesktop(window.matchMedia(`(min-width: ${breakpoints[2]})`).matches);

  useEventListener('resize', handleSetDesktopView, true);

  const handleSetTabletView = () =>
    setIsTablet(window.matchMedia(`(min-width: ${breakpoints[1]})`).matches);

  useEventListener('resize', handleSetTabletView, true);

  if (isDesktop)
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
          <Box
            flex="1"
            as="main"
            px="1.5rem"
            overflow="auto"
            minHeight="100vh"
            className={dark ? 'dark' : 'light'}
          >
            <Box
              as="header"
              display="flex"
              variant="container"
              justifyContent="flex-end"
              pr={['unset', 'unset', 'unset', 'xl']}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Settings />
              </Box>
            </Box>
            {children}
          </Box>
        </Box>
        <Tooltip />
      </Box>
    );

  return (
    <Box bg="surface" display="flex" minHeight="100vh" flexDirection="column">
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
          duration: TOAST_DURATION,
        }}
      />
      <Header />
      <Box
        as="main"
        flex="1"
        className={
          dark
            ? `dark ${!isTablet ? 'mobile' : 'tablet'}`
            : `light ${!isTablet ? 'mobile' : 'tablet'}`
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
