import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '../../../../constants';
import { AppTheme } from '../../../../interface';
import { capitalize } from '../../../../utils';
import { LogoSVG } from '../../../svg';
import { SIDEBAR_ITEMS } from './sidebar.data';

const Sidebar: FC = () => {
  const { t } = useTranslation();
  const [pathName, setPathName] = useState('/');
  const { dark, setDark } = useTheme() as AppTheme<Theme>;

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  return (
    <Box
      p="2xl"
      width="100%"
      display="flex"
      maxWidth="20rem"
      bg="surface.container"
      flexDirection="column"
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
    >
      <Box>
        <a href={Routes[RoutesEnum.Home]}>
          <Box textAlign="center">
            <LogoSVG full maxWidth="100%" maxHeight="2.6rem" height="100%" />
          </Box>
        </a>
        <Typography m="xl" variant="small" color="onSurfaceVariant">
          Menu
        </Typography>
        <Box display="flex" flexDirection="column" gap="s">
          {SIDEBAR_ITEMS.map(({ Icon, name, path, disabled }) => (
            <a href={path} target="_blank" rel="noreferrer" key={v4()}>
              <Box
                p="l"
                key={v4()}
                display="flex"
                borderRadius="m"
                color="onSurface"
                opacity={disabled ? 0.7 : 1}
                transition="all 350ms ease-in-out"
                cursor={disabled ? 'not-allowed' : 'pointer'}
                bg={pathName === path ? '#99BBFF14' : undefined}
                nHover={{
                  bg: !disabled && '#99BBFF28',
                }}
              >
                <Icon maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
                <Typography variant="small" ml="l">
                  {capitalize(t(name) as string)}
                </Typography>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap="l">
        <Typography
          variant="medium"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.light')}
        </Typography>
        <SwitchButton
          name="theme"
          size="medium"
          defaultValue={dark}
          onChange={() => setDark(!dark)}
        />
        <Typography
          variant="medium"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.dark')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
