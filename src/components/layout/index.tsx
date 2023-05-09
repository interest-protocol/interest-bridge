import { useTheme } from '@stylin.js/react';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { Theme } from '../../design-system';
import { Box } from '../../elements';
import SEO from '../SEO';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  pageTitle = '',
}) => {
  const { dark, colors, radii } = useTheme() as Theme;

  return (
    <Box color="text" height="100vh" display="flex" flexDirection="column">
      <SEO pageTitle={pageTitle} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            color: colors.text,
            borderRadius: radii.M,
            background: colors.foreground,
          },
          duration: 10000,
        }}
      />
      <Header />
      <Box
        flex="1"
        as="main"
        bg="textSoft"
        display="flex"
        pb={['XXXL', 'L']}
        position="relative"
        flexDirection="column"
        className={dark ? 'dark' : 'light'}
      >
        {children}
      </Box>
      <Footer />
      <Tooltip />
    </Box>
  );
};

export default Layout;
