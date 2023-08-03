import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { SIDEBAR_ITEMS } from '../../sidebar/sidebar.data';

const MainMenu: FC = () => {
  const { t } = useTranslation();
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

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
        <Box display="flex" flexDirection="column" gap="s">
          {SIDEBAR_ITEMS.map(({ Icon, name, path, disabled }) => (
            <a href={path} target="_blank" rel="noreferrer" key={v4()}>
              <Box
                p="l"
                display="flex"
                borderRadius="m"
                color="onSurface"
                opacity={disabled ? 0.7 : 1}
                cursor={disabled ? 'not-allowed' : 'pointer'}
                bg={pathName === path ? '#99BBFF14' : undefined}
              >
                <Icon maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
                <Typography variant="small" ml="l" textTransform="capitalize">
                  {t(name)}
                </Typography>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MainMenu;
