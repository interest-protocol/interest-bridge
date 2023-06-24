import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { AppTheme } from '../../../../interface';
import { CaretLeftSVG } from '../../../svg';
import { MenuItemProps } from './menu.types';

const MenuItem: FC<MenuItemProps> = ({ name, isActive }) => {
  const { setDark, dark } = useTheme() as AppTheme<Theme>;

  return (
    <>
      <Typography
        variant="medium"
        whiteSpace="nowrap"
        letterSpacing="0.031rem"
        fontFamily="'Roboto', sans-serif"
        textTransform="capitalize"
      >
        {name}
      </Typography>
      <Box display="flex" justifyContent="flex-end" width="max-content">
        {name === 'languages' ? (
          <Motion
            alignItems="center"
            display="inline-flex"
            justifyContent="center"
            rotate={['90deg', '90deg', '0deg']}
            animate={{ rotate: isActive ? '180deg' : '0deg' }}
          >
            <CaretLeftSVG maxWidth="0.5rem" maxHeight="0.5rem" width="100%" />
          </Motion>
        ) : (
          <SwitchButton
            name={name}
            defaultValue={dark}
            onChange={() => setDark(!dark)}
            labels={['off', 'on']}
          />
        )}
      </Box>
    </>
  );
};

export default MenuItem;
