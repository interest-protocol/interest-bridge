import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { Dispatch, FC, SetStateAction } from 'react';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '../../../../constants';
import { LogoSVG } from '../../../svg';
import { SIDEBAR_ITEMS } from './sidebar.data';

export type AppTheme<T> = T & {
  setDark: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: FC = () => {
  const { dark, setDark } = useTheme() as AppTheme<Theme>;
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
          {SIDEBAR_ITEMS.map(({ Icon, name, disabled }) => (
            <Box
              p="l"
              key={v4()}
              display="flex"
              borderRadius="m"
              color="onSurface"
              opacity={disabled ? 0.7 : 1}
              transition="all 350ms ease-in-out"
              cursor={disabled ? 'not-allowed' : 'pointer'}
              /*bg={asPath === path ? '#99BBFF14' : undefined}
              onClick={disabled ? undefined : () => push(path)}*/
              nHover={{
                bg: !disabled && '#99BBFF28',
              }}
            >
              <Icon maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
              <Typography variant="small" ml="l">
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap="l">
        <Typography variant="medium" color="onSurface">
          Light
        </Typography>
        <SwitchButton
          name="theme"
          size="medium"
          defaultValue={dark}
          onChange={() => setDark(!dark)}
        />
        <Typography variant="medium" color="onSurface">
          Dark
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
